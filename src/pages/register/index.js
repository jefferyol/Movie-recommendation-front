import React, { Component } from 'react'
import {RegWrapper,RegBox,RegHead,RegText,Button,Input} from './style'
class Register extends Component {
    render() {
        return (
            <RegWrapper>
					<RegBox>
						<RegHead>Register</RegHead>
						<RegText>用户账号</RegText><Input placeholder='用于登录'></Input><br/>
						<RegText>登录密码</RegText><Input type='password' placeholder='可包含数字,字母,符号'></Input><br/>
                        <RegText>确认密码</RegText><Input type='password' placeholder='再次输入密码'></Input>
                        <Button>确 定</Button>
					</RegBox>
			</RegWrapper>
        )
    }
}

export default Register;