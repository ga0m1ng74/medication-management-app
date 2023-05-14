import { useEffect, useState } from 'react';
import MyUpload from '../../components/MyUpload'
import { Card, Button, Form, Input, Table, Space, Modal, message, Pagination, Popconfirm, Select } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { loadDataAPI, InsertAPI, updateByIdAPI, deleteByIdAPI } from '../../service/medicine-infomation'
import { defaultImg } from '../../utils/Img';
import { loadDataAPI as loadCategoriesAPI } from '../../service/medicine-categories'
import MyEditor from '../../components/MyEditor';


export default function MedicineInfomation() {
  /**
   * modal show or hidden
   */
  const [isModalOpen, setIsModalOpen] = useState(false);
  /**
   * medicine query data
   */
  const [query, setQuery] = useState({})
  const [data, setData] = useState([])
  /**
   * modal 'ok' button and 'cancel' button
   */
  const handleOk = () => {
    setIsModalOpen(false);
    formData.submit()
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  /**
   * this method can get form data on submit
   */
  const [formData] = Form.useForm()
  /**
   * this for updated categories data
   * if id is empty for new data, others for update data
   */
  const [currentId, setCurrentId] = useState('')
  //pagination 
  const [total, setTotal] = useState(0)
  /**
   * image upload
   */
  const [imageUrl, setImageUrl] = useState<string>('');

  /**
   * medicien category infomation
   */
  const [categories, setCategories] = useState([])
  useEffect(() => {
    loadCategoriesAPI({ per: 100 }).then(result => {
      setCategories(result.data.list)
    })
  }, [])

  /**
   * MyEditor props
   */
  const [html, setHtml] = useState('')
  /**
   * listening query's change
   */
  useEffect(() => {
    loadDataAPI(query).then(result => {
      console.log(result)
      setData(result.data.list)
      //set pagination total pages
      setTotal(result.data.total)
    })
  }, [query])

  useEffect(() => {
    if (!isModalOpen) {
      //when Modal close reset data and image
      setCurrentId('')
      setImageUrl('')
      setHtml('')
    }
  }, [isModalOpen])

  return (
    <>
      <Card title='Medicine Infomation' extra={<>
        <Button type='primary' icon={<PlusOutlined />} onClick={() => {
          setIsModalOpen(true)
        }}></Button>
      </>}>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Form layout='inline' onFinish={(v) => {
            setQuery(v)
            // message.success('query success')
          }}>
            <Form.Item label='Query' name='name'>
              <Input placeholder='please input keyword' allowClear></Input>
            </Form.Item>
            <Form.Item>
              <Button type='primary' icon={<SearchOutlined />} htmlType='submit' />
            </Form.Item>
          </Form>

          <Table
            dataSource={data}
            rowKey='id'
            columns={[{
              title: 'Number',
              align: 'center',
              width: 80,
              render(value, record, index) {
                return (
                  <>{index + 1}</>
                )
              }
            }, {
              title: 'Name',
              align: 'center',
              dataIndex: 'name'
            }, {
              title: 'Price',
              align: 'center',
              dataIndex: 'price'
            }, {
              title: 'In Stock',
              align: 'center',
              dataIndex: 'amount'
            }, {
              title: 'category',
              align: 'center',
              width: 180,
              render(value, record: any) {
                return (
                  <>{record.category?.name || 'none'}</>
                )
              },
            }, {
              title: 'Image',
              align: 'center',
              width: 120,
              render(value, record: any) {
                return (
                  <img className='medicineImg' src={defaultImg(record?.image)} alt={record?.name} />
                )
              },
            }, {
              title: 'Description',
              align: 'center',
              dataIndex: 'desc',
            }, {
              title: 'Action',
              align: 'center',
              width: 100,
              render(value, record:any, index) {
                return (
                  <>
                    <Button type='primary' icon={< EditOutlined />} size='small' onClick={() => {
                      setIsModalOpen(true)
                      setCurrentId(record.id)
                      setImageUrl(record.image)
                      setHtml(record.content)
                      formData.setFieldsValue(record)
                    }} />
                    <Popconfirm title='Delete?' onConfirm={async () => {
                      await deleteByIdAPI(record.id)
                      //reload the page, useEffect hook
                      setQuery({})
                    }}>
                      <Button type='primary' icon={< DeleteOutlined />} size='small' danger />
                    </Popconfirm>
                  </>
                )
              },
            }
            ]}
            pagination={{
              total,
              showSizeChanger: false,
              onChange(page) {
                setQuery({
                  ...query,
                  page,
                })
              }
            }}
          />
        </Space>
      </Card>
      <Modal title='Edit' width='1000px' open={isModalOpen} onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        //when close modal clear input data before
        destroyOnClose>
        <Form
          preserve={false}
          onFinish={async (values) => {
            if (currentId) {
              //updated
              await updateByIdAPI(currentId, { ...values, image: imageUrl, content: html })
            } else {
              //insert 
              await InsertAPI({ ...values, image: imageUrl ,content:html})
            }
            message.success('saved')
            setIsModalOpen(false)
            //re-render page  useEffect hook
            setQuery({})
          }}
          labelCol={{ span: 6 }}
          form={formData}
        >
          <Form.Item label='Name' name='name' rules={[{
            required: true,
            message: 'name is required'
          }]}>
            <Input placeholder='please enter a name' />
          </Form.Item>
          <Form.Item label='catrgory' name='medicineCategoryId'>
            <Select allowClear>
              {/* {categories.map((item:medicineInfo.Category) => <Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)} */}
              {categories.map((item: any) => <Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item label='Image'>
            <MyUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </Form.Item>
          <Form.Item label='Description' name='desc' >
            <Input.TextArea placeholder='please enter descriptions' />
          </Form.Item>
          <Form.Item label='Infomation'>
            <MyEditor html={html} setHtml={setHtml} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}