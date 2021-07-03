import React from 'react';
import{
    SearchBox,ResultList,Picture,Title,Actor,Score,PictureBox,TextBox,ResultTitle
}from './style'
import { Link } from 'react-router-dom';
class Search extends React.Component{
    state = {
        movie:[
            {'img': '//puui.qpic.cn/vcover_vt_pic/0/ge1vg9evjfeb6l01568013388/220', 'title': '夏洛特烦恼','actor': '主演：沈腾 马丽 尹正 王智 艾伦 田雨 宋阳', 'score': '8.7 '}, 
            {'img': '//puui.qpic.cn/vcover_vt_pic/0/ujnamwpqg1xg8qm1559139238/220', 'title': '西游·降魔篇', 'actor': '主演：文章 舒淇 黄渤 罗志祥', 'score': '8.5 '}, 
            {'img': '//puui.qpic.cn/vcover_vt_pic/0/b40ff7kummjfp7e1566963062/220', 'title': '澳门风云3', 'actor': '主演：周润发 张家辉 刘德华 张学友 李宇春 刘嘉玲 余文乐', 'score': '7 '}
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
                                    pathname:`detail`
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