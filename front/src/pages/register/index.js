import React, { Component,useState } from 'react'
//import {RegWrapper,RegBox,RegHead,RegText,Button,Input} from './style'

import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,message } from 'antd';
import login_bg from "../../statics/login_bg.jpg";
import axios from "axios";
import { withRouter } from 'react-router-dom'
const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Register = (props) => {
    const [form] = Form.useForm();
    const [mobile,setMobile] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [favorites,setFavorites] = useState('');
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    function onChange(checkedValues) {
       setFavorites(checkedValues.join(','));
    }
    const handleClick = ()=>{
        console.log(username);
        console.log(mobile);
        console.log(password);
        console.log(favorites);
        axios.interceptors.request.use(config => {
            config.withCredentials = true;
            return config;
        });
        axios({
            method:'POST',
            url:'http://localhost:8080/user/register',
            data:{
                mobile : mobile,
                username : username,
                password : password,
                label : favorites,
            },
        }).then(response=>{
            console.log(response);
            if(username!==''&&mobile!==''&&password!==''&&favorites!==''){
                message.success('注册成功！');
                props.history.push({
                    pathname: '/login',
                });
            }
            else{
                message.error('请检查是否缺项！ ');
            }
        }).catch(error=>{
            message.error('注册失败，请检查数据格式并重试！');
            console.log(error)});
    }
    return (
        <div
            style={{
                zIndex: '0',
                position: 'absolute',
                left: '0',
                right: '0',
                bottom: '0',
                top: '56px',
                background: `url(${login_bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
                style={{
                    width: '600px',
                    height: '400px',
                    margin: '100px auto',
                    paddingTop: '20px',
                    // background: '#fff',
                    // opacity: 0.5,
                    borderRadius :'20px',
                    //background: '#00000060',
                    background:'rgba(255,255,255,0.7)',
                    boxShadow: '0 0 8px rgba(0,0,0,.1)',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Form.Item
                    name="username"
                    label="username"
                    tooltip="What do you want others to call you?"
                    rules={[{ required: true, message: '请输入用户名!', whitespace: true }]}
                >
                    <Input onChange={(e)=>{setUsername(e.target.value)}}/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: '请输入正确的手机号!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} onChange={(e)=>{setMobile(e.target.value)}} />
                </Form.Item>


                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                        {
                            pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
                            message:'密码必须同时为含数字和字母的8～16位组合'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password onChange={(e)=>{setPassword(e.target.value)}}/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请再次输入密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次密码不一致!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="favorites"
                    label="Favorites"
                    rules={[{ required: true, message: '请选择喜爱的电影类型!' }]}
                >
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="喜剧">喜剧</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="动作">动作</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="悬疑">悬疑</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="爱情">爱情</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="恐怖">恐怖</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="科幻">科幻</Checkbox>
                            </Col>

                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" onClick = {handleClick}>
                        Register
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};
// class Register extends Component {
//     submit=()=>{
//         const inputs = document.getElementsByTagName('Input')
//         //验证输入的注册信息是否为空
//         if(inputs[1].value===''){
//             alert('账号不能为空，请重新输入');
//             return
//         }
//         if(inputs[2].value===''){
//             alert('用户名称不能为空，请重新输入');
//             return
//         }
//         if(inputs[3].value===''){
//             alert('密码不能为空，请重新输入');
//             return
//         }
//         if(inputs[4].value===''){
//             alert('确认密码不能为空，请重新输入');
//             return
//         }
//         //验证密码是否一致
//         if(inputs[3].value!==inputs[4].value){
//             alert('密码输入不一致，请重新输入')
//             return
//         }
//     }
//     render() {
//         return (
//             <RegWrapper>
// 					<RegBox>
// 						<RegHead>Register</RegHead>
// 						<RegText>用户账号</RegText><Input placeholder='用于登录'></Input><br/>
//                         <RegText>账户名称</RegText><Input placeholder='为账户取个个性的名称'></Input><br/>
// 						<RegText>登录密码</RegText><Input type='password' placeholder='可包含数字,字母,符号'></Input><br/>
//                         <RegText>确认密码</RegText><Input type='password' placeholder='再次输入密码'></Input>
//                         <Button onClick={this.submit}>确 定</Button>
// 					</RegBox>
// 			</RegWrapper>
//         )
//     }
// }


export default withRouter(Register);