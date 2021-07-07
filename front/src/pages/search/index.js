import React from 'react';
import{
    SearchBox,ResultList,Picture,Title,Actor,Score,PictureBox,TextBox,ResultTitle
}from './style'
import { Link } from 'react-router-dom';
class Search extends React.Component{
    state = {
        movie:[
            {'img': '//puui.qpic.cn/vcover_vt_pic/0/4xf4ni3vwii9kl11506674275/220', 'type': '剧情', 'title': '建军大业', 'actor': '主演：刘烨 朱亚文 黄志忠 欧豪 王景春 杨大鹏 霍建华 关晓彤', 'score': '7.6 ', 'link': 'https://v.qq.com/x/cover/4xf4ni3vwii9kl1.html', 'source': 'https://v.qq.com/txp/iframe/player.html?vid=p00246at0hr'}
        ]   
    }
    render(){
        return(
            <SearchBox>
                <ResultTitle>
                    搜索结果：
                </ResultTitle>
                {
                    this.state.movie.map((element,index)=>{
                        return(
                            <Link to={
                                {
                                    pathname:`detail`,
                                    query:{
                                            title:element.title,
                                            score:element.score,
                                            actor:element.title,
                                            source:element.source
                                        }
                                }
                            }>
                                <ResultList>
                                    <PictureBox>
                                        <Picture src={element.img}></Picture>
                                    </PictureBox>
                                    
                                    <TextBox>
                                        <Title>{element.title}</Title><br/>
                                        <Score>{element.score}</Score><br/>
                                        <Actor>{element.actor}</Actor><br/>
                                        
                                    </TextBox>
                                </ResultList>
                            </Link>
                            
                        )}
                        
                    )
                }
            </SearchBox>
        )
    }
}
export default Search