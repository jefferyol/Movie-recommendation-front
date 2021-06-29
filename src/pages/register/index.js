import React, { Component } from 'react'
import {RegWrapper,RegBox,RegHead,RegText,Button,Input} from './style'
class Register extends Component {
    submit=()=>{
        const inputs = document.getElementsByTagName('Input')
        //验证输入的注册信息是否为空
        if(inputs[1].value===''){
            alert('账号不能为空，请重新输入');
            return
        }
        if(inputs[2].value===''){
            alert('用户名称不能为空，请重新输入');
            return
        }
        if(inputs[3].value===''){
            alert('密码不能为空，请重新输入');
            return
        }
        if(inputs[4].value===''){
            alert('确认密码不能为空，请重新输入');
            return
        }
        //验证密码是否一致
        if(inputs[3].value!==inputs[4].value){
            alert('密码输入不一致，请重新输入')
            return
        }
    }
    render() {
        return (
            <RegWrapper>
					<RegBox>
						<RegHead>Register</RegHead>
						<RegText>用户账号</RegText><Input placeholder='用于登录'></Input><br/>
                        <RegText>账户名称</RegText><Input placeholder='为账户取个个性的名称'></Input><br/>
						<RegText>登录密码</RegText><Input type='password' placeholder='可包含数字,字母,符号'></Input><br/>
                        <RegText>确认密码</RegText><Input type='password' placeholder='再次输入密码'></Input>
                        <Button onClick={this.submit}>确 定</Button>
					</RegBox>
			</RegWrapper>
        )
    }
}

export default Register;