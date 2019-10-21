import React ,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card,message} from 'antd';
import '../../../node_modules/antd/dist/antd.css'
import './login.less'
class Login extends Component{
    submit=()=>{
        console.log('登录')
        this.props.form.validateFields((err,data)=>{
            if(err){
                message.error('输入信息有误，请重新输入')
            }else{
                this.$axios.get('/yapi/admin/login',{us:123,ps:123})
                .then((data)=>{
                    console.log(data)
                })
                message.success('登录成功1s后跳转到首页',1,()=>{
                    this.props.history.push('/admin')
                })
            }
            console.log(err,data)
        })
        // let result = this.props.form.getFieldsValue()
        // console.log(result)
    }
    render(){
        console.log(this)
        let { getFieldDecorator } = this.props.form;
        return(
            <div className='login-box'>
            <Card style={{width:'300px',position:'fixed',top:'20vh',right:'80px'}}>
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('us',{
                        rules: [{ required: true, message: 'Please input your username!' },
                                { min: 6, message: '用户名长度6到9位' },
                                { max: 9, message: '用户名长度6到9位' }]
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />
                    )}
                    
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('ps',{
                    rules: [{ required: true, message: 'Please input your Password!' }]
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />)}
                </Form.Item>
                <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
                <Button type="primary" onClick={this.submit} className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            </Card>
            </div>
        )
    }
}
export default Form.create()(Login);
