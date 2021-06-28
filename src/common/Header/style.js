import styled from 'styled-components';
import logoPic from '../../statics/电影.png'
export const HeaderWrapper = styled.div`
  position : relative;
  height : 56px;
`
export const Logo = styled.a`
  position : absolute;
  top : 0;
  left : 20px;
  display : block;
  width : 55px;
  height : 56px; 
  background : url(${logoPic});
  background-size : contain;
`
export const Nav = styled.div`
  width : 960px;
  margin : 0 auto;
  height : 100%;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height : 56px;
  padding : 0 15px;
  font-size : 17px; 
  color : #333;
  &.left {
    float: left;
  }
  &.right {
    color:#66ccff;
    float: right;
  }
  &.active {
    color : #66ccff;
  }
  
`
export const NavSearch = styled.input.attrs(
    {
        placeholder : '输入关键字或片名',
    }
)`
  width : 160px;
  height: 38px;
  padding : 0 20px;
  box-sizing : border-box;
  margin-top: 9px;
  margin-left: 20px;
  border : none;
  border-radius : 19px;
  outline : none;
  background : #eee;
  font-size : 14px;
  &::placeholder {
    color : #999;
  }
`
export const Addition = styled.div`
  position : absolute;
  right : 0;
  top : 0;
  height : 56px;
`
export const Button = styled.div`
  float : left;
  margin-top: 9px;
  margin-right: 20px;
  padding : 0 20px;
  line-height : 38px;
  border-radius : 19px;
  border : 1px solid #66ccff;
  font-size : 14px;
  &.reg{
    color : #66ccff;
  }
  &.personalrecommendation{
    background : #66ccff;
    color : #fff;
  }
  &.search_btn{
    font-size:20px;
    border:none;
    float:right;
    margin-right:45%;
  }
`
