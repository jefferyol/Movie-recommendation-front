import React from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
}from './style'
import { Link } from 'react-router-dom';
class Header extends React.Component{
    search_ref = React.createRef()
    search_fun = ()=>{
        const search_content = this.search_ref.current.value
        if(search_content===''){
            alert('请输入关键字或片名')
            return
        }
    }
    render(){
        return (
        <HeaderWrapper>
            <Link to="/">
            <Logo />
            </Link>
            <Nav>
                <Link to="/">
                <NavItem className="left active">首页</NavItem>
                </Link>
                <Link to="/login">
                <NavItem className="right">登录</NavItem>
                </Link>
                <Link to = '/user'>
                <NavItem className="right">个人主页 </NavItem>
                </Link>
                <NavSearch ref={this.search_ref}/>
                <Link to='/search'><Button className = 'search_btn' onClick={this.search_fun}>🔍</Button>
                </Link>
                
            </Nav>
            
            <Addition>
                <Link to = '/register'>
                <Button className = 'reg'>
                    注册
                </Button>
                </Link>
                <Link to='/recommend'>
                <Button className = 'personalrecommendation' >
                个性化推荐
                </Button>
                </Link>               
            </Addition>
        </HeaderWrapper>
    )
    }
    
    
}
export default Header;