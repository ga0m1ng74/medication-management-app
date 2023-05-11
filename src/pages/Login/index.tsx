import {useNavigate} from 'react-router-dom'
import { Row, Col, Card, Form, Input, Button, message } from 'antd'
import { loginImg } from '../../utils/Img'

export default function LoginIndex() {

    const navigate = useNavigate()
    return (
        <Row>
            <Col md={{ span: 8, push: 8 }} xs={{ span: 22, push: 1 }}>
                <img src={loginImg} alt="loginImg" style={{
                    display: 'block',
                    width: '12rem',
                    margin: '2rem auto',
                    borderRadius: '50%'
                }} />
                <Card title='Medication Management System'>
                    <Form labelCol={{
                        md: {
                            span: 6,
                        }
                    }}
                    // form submit and get username and password 
                    onFinish={(values)=>{
                        console.log(values);
                        message.success('login success')
                        navigate('/admin/dashboard')
                    }}
                    >
                        <Form.Item label='Username' name='username'
                        rules={[{
                            required:true,
                            message:'please check your username!'
                        }]}>
                            <Input placeholder='admin@test.com' />
                        </Form.Item>
                        <Form.Item label='Password' name='password'
                        rules={[{
                            required:true,
                            message:'please check your password!'
                        }]}>
                            <Input.Password placeholder='123456' />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' type='primary' style={{
                                display:'block',
                                margin:'0px auto',
                                width:'10vw'
                            }}>Login</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}
