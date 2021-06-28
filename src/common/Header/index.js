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
function Header(){

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
        <NavItem className="right">登陆 </NavItem>
        </Link>
        <Link to = '/user'>
        <NavItem className="right">个人主页 </NavItem>
        </Link>
        <NavSearch/>
        <Button className = 'search_btn'>🔍</Button>
        
    </Nav>
    
    <Addition>
        <Link to = '/register'>
        <Button className = 'reg'>
            注册
        </Button>
        </Link>
        <Button className = 'personalrecommendation' >
           个性化推荐
        </Button>
    </Addition>
</HeaderWrapper>
    )
}
export default Header;