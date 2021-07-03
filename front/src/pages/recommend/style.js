import styled from "styled-components";
export const RecommendBox = styled.div`
    margin: 10px auto;
    width: 92%;
    height: 750px;
    
`
export const PersonaliseBox = styled.div`
    vertical-align: top;
    display: inline-block;
    width: 70%;
    height:750px;
    border-radius: 10px;
`
export const PersonaliseHeader = styled.div`
    width:100%;
    height:35px;
    border-bottom: 1px #DCDCDC dashed;
`
export const PersonaliseTitle = styled.div`
    font-size:x-large;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    display: inline-flex;
    width:20%;
    height: 100%;
    color: orange;
`
export const PersonaliseChange = styled.div`
    font-size:large;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    display: inline-flex;
    margin-left: 60%;
    cursor:pointer;
    &:hover{
        color: skyblue;
    }
`
export const MovieList = styled.div`
    display:inline-block;
    margin:5px 3%;
    width:19%;
    height:350px;
    background-color:#F8F8F8;
    vertical-align:top;
    border-radius: 8px;
    cursor:pointer;
    &:hover{
        box-shadow: 10px 6px 5px #888888;
    }
`
export const Title = styled.div`
    margin-top: 1%;
    margin-left: 2%;
    font-weight:bold;
    font-size:larger;
    &:hover{
        color: orange;
    }
`
export const Picture = styled.img`
    width:100%;
    height:78%;
    border-radius: 8px;
`
export const Actor = styled.div`
    margin: 1% 2%;
    font-size:middle;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
`
export const Score = styled.div`
    margin: 1% 2%;
    font-size: middle;
    color: #FF6200;
`
export const PopularBox = styled.div`
    margin-left: 5%;
    width: 25%;
    height: 750px;
    background-color: #F8F8F8;
    border-radius: 20px;
    display: inline-block;
`
export const PopularTitle = styled.div`
    margin-top: 6%;
    font-size: x-large;
    text-align:center;
`
export const PopularList = styled.div`
    width:86%;
    margin: 5% auto;
    border-top: 1px solid black;
`
export const Ul = styled.ul`
    padding:0;   
    list-style: none;
`
export const Li = styled.li`
    margin-top:9%;
    padding:0;
    cursor:pointer;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
`
export const PopularRank = styled.div`
    width: 10%;
    display: inline-block;
    color: #FF183E;
    font-family:numFont,PingFangSC-Light,PingFangSC-Regular,Tahoma,Microsoft Yahei,sans-serif;
    font-size: 150%;
`
export const PopularMovie = styled.div`
    width:  70%;
    margin-left: 5%;
    display: inline-block;
    font-size: 150%;
    font-family:Microsoft Yahei,sans-serif;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    vertical-align: bottom;
    &:hover{
        color:#FF5C38
    }
    
`
export const PopularScore = styled.div`
    margin-left: 5%;
    display: inline-block;
    font-family:numFont,PingFangSC-Light,PingFangSC-Regular,Tahoma,Microsoft Yahei,sans-serif;
    font-size: 150%;
    color:orange;
`