import React from 'react';
import {
    MainWrapper,
    Ul,
    Li,
    MovieList,
    Title,
    Picture,
    Actor,
    Score
}   from './style';

class Home extends React.Component{
    
    state = {
        Type:'全部',
        Classification:['全部','喜剧','动作','爱情','悬疑','科幻','动画','战争','恐怖','冒险','记录'],
        Quantity:20,
        Movie:[{
                img:'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200y72jo651609388700140/220',
                title:'我的姐姐',
                actor:'张子枫 金遥源 肖央 朱媛媛 段博文 梁靖康',
                score:7.8
            },{
                img:'https://puui.qpic.cn/vcover_vt_pic/0/1bnyfttijufe0cq1567479871/220',
                title:'战狼',
                actor:'吴京 余男 斯科特·阿特金斯 凯文·李 倪大红',
                score:8.3
            },{
                img:'https://puui.qpic.cn/vcover_vt_pic/0/msbt3iret5tgwu81567135959/220',
                title:'赌神',
                actor:'周润发 王祖贤 刘德华 张敏',
                score:9
            },{
                img:'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200y72jo651609388700140/220',
                title:'我的姐姐',
                actor:'张子枫 金遥源 肖央 朱媛媛 段博文 梁靖康',
                score:7.8
            },{
                img:'https://puui.qpic.cn/vcover_vt_pic/0/1bnyfttijufe0cq1567479871/220',
                title:'战狼',
                actor:'吴京 余男 斯科特·阿特金斯 凯文·李 倪大红',
                score:8.3
            },{
                img:'https://puui.qpic.cn/vcover_vt_pic/0/msbt3iret5tgwu81567135959/220',
                title:'赌神',
                actor:'周润发 王祖贤 刘德华 张敏',
                score:9
            }
        ]
    }
    //修改当前选中类型的样式以及Type的值
    changeStyle = (event)=>{
        const li = document.getElementsByTagName('Li')
        if(event.target.innerText!==this.state.Type){
            for(let i=0;i<li.length;i++){
                li[i].className = event.target.className
            }
        }  
        this.setState({
            Type:event.target.innerText
        })
        event.target.className+=' selected'
    }
    render(){
        return (
            <MainWrapper>
                <Ul>
                    {
                        this.state.Classification.map((element,index)=>{
                            return  index===0?                         
                            <Li onClick = {this.changeStyle} className = 'selected'>{element}</Li>
                            :                                              
                            <Li onClick = {this.changeStyle}>{element}</Li>                       
                        })
                    }
                </Ul>
                {
                    this.state.Movie.map((element,index)=>{
                        return(
                            <MovieList key = {index}>
                                <Picture src={element.img}/>
                                <Title>{element.title}</Title>
                                <Actor>{'主演：'+element.actor}</Actor>
                                <Score>{'评分：'+element.score}</Score>
                            </MovieList>
                        )
                    })
                }
            </MainWrapper>
            
        )
    }
}
export default Home;