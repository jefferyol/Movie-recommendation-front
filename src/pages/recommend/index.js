import React from 'react'
import{ RecommendBox, PersonaliseBox,
        PopularBox,PopularTitle,PopularList,Ul,Li,
        PopularRank,PopularMovie,PopularScore,
        PersonaliseHeader,PersonaliseTitle,PersonaliseChange,
        MovieList,Title,Picture,Actor,Score,
        
    } from './style';
class Recommend extends React.Component{
    state = {
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
            }
        ],
        RankList:[{
            rank:1,title:'你好，李焕英',Score:'9.8'
        },{
            rank:2,title:'战狼',Score:'7.8'
        },{
            rank:3,title:'我的姐姐',Score:'8.8'
        },{
            rank:4,title:'西红市首富',Score:'6.8'
        },{
            rank:5,title:'我不是药神',Score:'9.8'
        },{
            rank:6,title:'建党伟业',Score:'8.8'
        },{
            rank:7,title:'喜羊羊与灰太狼',Score:'9.8'
        },{
            rank:8,title:'熊出没',Score:'4.8'
        },{
            rank:9,title:'一秒钟',Score:'9.8'
        },{
            rank:10,title:'赌神',Score:'8.8'
        }
        ]
    }
    render(){
        return(
            <RecommendBox>
               <PersonaliseBox>
                    <PersonaliseHeader>
                        <PersonaliseTitle>猜你喜欢</PersonaliseTitle>
                        <PersonaliseChange>🌀 不喜欢，换一批</PersonaliseChange>
                    </PersonaliseHeader>
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
               </PersonaliseBox>
               <PopularBox>
                    <PopularTitle>🔥&nbsp;热门电影排行榜</PopularTitle>
                    <PopularList>
                        <Ul>
                            {
                                this.state.RankList.map((element,index)=>{
                                    return(
                                        <Li>
                                            <PopularRank>{element.rank}</PopularRank>
                                            <PopularMovie>{element.title}</PopularMovie>
                                            <PopularScore>{element.Score}</PopularScore>
                                        </Li>
                                    )
                                })
                            }                           
                        </Ul>
                    </PopularList>                     
               </PopularBox>
            </RecommendBox>
        )
    }

}
export default Recommend;