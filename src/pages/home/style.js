import styled from 'styled-components';

export const MainWrapper = styled.div`
`
export const Ul = styled.ul`
    height: 50px; 
    list-style: none;
    display: flex;
    background-color: #F8F8F8;
    color:  #222222; 
`
export const Li = styled.li` 
    width:10%;
    font-size:larger;
    text-align: center;
    margin:auto 3%;
    cursor:pointer;
    &.selected{
        background-color: #DCDCDC;     
        border-radius:10px;
    }
`
export const MovieList = styled.div`
    display:inline-block;
    margin:20px 4%;
    width:12%;
    height:360px;
    background-color:#F8F8F8;
    vertical-align:top;
    border-radius: 8px;
    cursor:pointer;
    &:hover{
        box-shadow: 10px 10px 5px #888888;
    }
`
export const Title = styled.div`
    margin-top: 5%;
    margin-left: 2%;
    font-weight:bold;
    font-size:larger;
    &:hover{
        color: orange;
    }
`
export const Picture = styled.img`
    width:100%;
    height:75%;
    border-radius: 8px;
    
`
export const Actor = styled.div`
    margin: 3% 2%;
    font-size:middle;
    text-overflow:ellipsis;/*省略号 */
    white-space:nowrap;/*溢出时不换行 */
    overflow:hidden;/*溢出时隐藏 */
`
export const Score = styled.div`
    margin: 2% 2%;
    font-size: middle;
    color: #FF6200;
`