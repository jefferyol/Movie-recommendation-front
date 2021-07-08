import React from 'react';
import axios from 'axios';
import{
    SearchBox,ResultList,Picture,Title,Actor,Score,PictureBox,TextBox,ResultTitle
}from './style'
import { Link } from 'react-router-dom';
class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Movie:[],
            search_content :this.props.location.query.search_content
        }
    }
    componentDidMount=()=>{
        axios.get('http://localhost:8080/movie/searchMovieList', {            
    }).then(value => {
        this.setState({Movie:value.data})
    });
    }
    render(){
        return(
            <SearchBox>
                <ResultTitle>
                   '{this.props.location.query.search_content}' 搜索结果：
                </ResultTitle>
                {
                    this.state.Movie.map((element,index)=>{
                        if(element.title===this.state.search_content||element.title.includes(this.state.search_content)){
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
                            
                        )
                        }
                        }
                        
                    )
                }
            </SearchBox>
        )
    }
}
export default Search