import React from 'react';
import axios from 'axios';
import{ RecommendBox, PersonaliseBox,
        PopularBox,PopularTitle,PopularList,Ul,Li,
        PopularRank,PopularMovie,PopularScore,
        PersonaliseHeader,PersonaliseTitle,PersonaliseChange,
        MovieList,Title,Picture,Actor,Score,    
    } from './style';
import { Link } from 'react-router-dom';
class Recommend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        label:"",      
        Movie:[],
        RankList:[],
        }
    }    
    componentDidMount=()=>{
     //获取排行榜
    axios.get('http://localhost:8080/rank/movieList', {            
    }).then(value => {
        
        this.setState({RankList:value.data})
    });
    //获取推荐电影
    axios({
        method : 'POST',
        url: 'http://localhost:8080/recommand',
        data: {
                "label":"剧情"
        }
        
    }).then(response=>{ 
        this.setState({Movie:response.data});
    })
}
    changeMovie=()=>{
        axios({
            method : 'POST',
            url: 'http://localhost:8080/recommand',
            data: {
                    "label":"剧情,爱情"
            }            
        }).then(response=>{ 
            this.setState({Movie:response.data});
        })
    }

    render(){
        return(
            <RecommendBox>
               <PersonaliseBox>
                    <PersonaliseHeader>
                        <PersonaliseTitle>猜你喜欢</PersonaliseTitle>
                        <PersonaliseChange onClick={this.changeMovie}>🌀 不喜欢，换一批</PersonaliseChange>
                    </PersonaliseHeader>
                    {
                    this.state.Movie.map((element,index)=>{
                       
                            return(
                            <Link to={{
                                pathname:`detail`,
                                query:{
                                    title:element.title,
                                    score:element.score,
                                    actor:element.title,
                                    source:element.source
                                }
                            }}>
                                <MovieList key = {index}>
                                    <Picture src={element.img}/>
                                    <Title>{element.title}</Title>
                                    <Actor>{element.actor}</Actor>
                                    <Score>{'评分：'+element.score}</Score>
                                </MovieList>
                            </Link>
                            
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
                                            <Li>
                                                <PopularRank>{index+1}</PopularRank>
                                                <PopularMovie>{element.title}</PopularMovie>
                                                <PopularScore>{element.score}</PopularScore>
                                            </Li>
                                        </Link>
                                        
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