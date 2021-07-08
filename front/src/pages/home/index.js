import React from 'react';
import axios from 'axios';
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
import { Link } from 'react-router-dom';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Type:'全部',
            Classification:['全部','剧情','喜剧','动作','爱情','惊悚','犯罪','悬疑','战争','科幻'],
            Movie:[]
        }
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
        },()=>{console.log(this.state.Type)})
        event.target.className+=' selected'
    }
    componentDidMount=()=>{
        axios.get('http://localhost:8080/movie/movieList', {            
    }).then(value => {
        this.setState({Movie:value.data})
    });
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
                        if(this.state.Type==='全部')
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
                                    <MovieList key = {index}>
                                        <Picture src={element.img}/>
                                        <Title>{element.title}</Title>
                                        <Actor>{element.actor}</Actor>
                                        <Score>{'评分：'+element.score}</Score>
                                    </MovieList>
                                </Link>
                            )
                        else{
                            if(element.type==this.state.Type)
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
                                    <MovieList key = {index}>
                                        <Picture src={element.img}/>
                                        <Title>{element.title}</Title>
                                        <Actor>{element.actor}</Actor>
                                        <Score>{'评分：'+element.score}</Score>
                                    </MovieList>
                                </Link>
                            )
                        }
                        
                    })
                }
            </MainWrapper>
            
        )
    }
}
export default Home;