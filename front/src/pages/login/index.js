import React, { PureComponent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { LoginWrapper, LoginBox, Input, Button,LoginHead} from './style';
import { actionCreators } from './store';
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './style.less';
import login_bg from '../../statics/login_bg.jpg';
const { Option } = Select;

// class Login extends PureComponent {
// 	render() {
// 		const { loginStatus } = this.props;
// 		if (!loginStatus) {
// 			return (
// 				<LoginWrapper>
// 					<LoginBox>
// 						<LoginHead>Login</LoginHead>
// 						<Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
// 						<Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
// 						<Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
// 					</LoginBox>
// 				</LoginWrapper>
// 			)
// 		}else {
// 			return <Redirect to='/'/>
// 		}
// 	}
// }
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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
      }}
    >
      <Form
        name="normal_login"
        className={styles.loginForm}
        style={{
          width: '400px',
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
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, message: '请输入正确的手机号!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="phoneNumber"
             style = {{
            }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className="styles.site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item

        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className={styles.loginFormForgot} href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginFormButton}
            style={{
                display:'block',
                width:"200px"
            }}
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapState = state => ({
  loginStatus: state.getIn(['login', 'login']),
});

const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  },
});

export default connect(mapState, mapDispatch)(Login);
