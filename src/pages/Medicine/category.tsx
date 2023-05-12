import { useEffect, useState } from 'react';
import MyUpload from '../../components/MyUpload'
import { Card, Button, Form, Input, Table, Space, Modal, message } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import {loadDataAPI} from '../../service/medicine-categories'

export default function MedicineCategory() {
    /**
     * modal show or hidden
     */
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * 
     */
    const [query,SetQuery] =useState({})
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
     * listening query's change
     */
    useEffect(() => {
      
    loadDataAPI(query).then(result=>{
        console.log(result)
    })
      return () => {
        
      }
    }, [query])
    

    return (
        <>
            <Card title='Medicine Categories' extra={<>
                <Button type='primary' icon={<PlusOutlined />} onClick={() => {
                    setIsModalOpen(true)
                }}></Button>
            </>}>
                <Space direction='vertical' style={{ width: '100%' }}>
                    <Form layout='inline' onFinish={(values)=>{
                        message.success('query success')
                    }}>
                        <Form.Item label='Name'>
                            <Input placeholder='please input keyword'></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' icon={<SearchOutlined />} htmlType='submit' />
                        </Form.Item>
                    </Form>

                    <Table columns={[{
                        title: 'Number',
                        align: 'center',
                        width: 80
                    }, {
                        title: 'Name',
                        align: 'center'
                    }, {
                        title: 'Image',
                        align: 'center',
                        width: 120
                    }, {
                        title: 'Description',
                        align: 'center'
                    }, {
                        title: 'Action',
                        align: 'center',
                        width: 100
                    }
                    ]} />
                </Space>
            </Card>
            <Modal title='Edit' open={isModalOpen} onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                //when close modal clear input data before
                destroyOnClose>
                <Form
                    preserve={false}
                    onFinish={(values) => {
                        console.log(values);
                        message.success('saved')
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
                    <Form.Item label='Image'>
                        <MyUpload />
                    </Form.Item>
                    <Form.Item label='Description' name='desc'>
                        <Input.TextArea placeholder='please enter descriptions' />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
