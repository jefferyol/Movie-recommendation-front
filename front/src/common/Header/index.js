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
import {message} from 'antd';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
class Header extends React.Component{
    state={search_content:''}
    search_ref = React.createRef()
    search_btn = React.createRef()
    updateSearchContent = ()=>{
        const search_content = this.search_ref.current.value
        if (search_content!==''){
            this.search_btn.current.style.display = 'inline-block'
        }
        else if (search_content===''){
            this.search_btn.current.style.display = 'none'
        }
        this.setState({search_content:this.search_ref.current.value})
    }
    search_fun = ()=>{
        const search_content = this.search_ref.current.value
        this.setState({search_content:search_content})
        document.getElementById('searchContent').value=''
        this.search_btn.current.style.display = 'none'
        //this.setState({search_content:search_content},()=>{console.log(this.state.search_content)})
        // if(search_content===''){
        //     message.error('搜索框内容为空');
        // }
        // else{
            // this.props.history.push({
            //     pathname: '/search',
            //     query: {
            //         search_content:this.state.search_content
            //     },
            // });
        // }
        // this.search_ref.current.value=''
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
                <NavSearch id='searchContent' ref={this.search_ref} onChange={this.updateSearchContent}/>
                <Link to={
                            {
                                pathname:`search`,
                                query:{
                                    search_content:this.state.search_content
                                }
                            }
                        }><Button className = 'search_btn' style={{display:'none'}} ref={this.search_btn} onClick={this.search_fun}>🔍</Button>
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
export default withRouter(Header);