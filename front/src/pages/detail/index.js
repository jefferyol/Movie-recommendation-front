import React from 'react';
import {
    MovieWrapper,
    MovieHeader,MovieTitle,MovieScore,MovieActor,MovieBox
} from './style'
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie:{title: "袁隆平", score: 9.9, actor:"主演：果静林 曹艳艳",source:'https://v.qq.com/txp/iframe/player.html?vid=l0026wusow1'}
        }
    }
    render(){
        return(
            <MovieWrapper>
                <MovieHeader>
                    <MovieTitle>{this.state.movie.title}</MovieTitle>
                    <MovieScore>{this.state.movie.score}</MovieScore>
                    <MovieActor>{this.state.movie.actor}</MovieActor>
                </MovieHeader>
                <MovieBox frameborder="0" src={this.state.movie.source} allowFullScreen="true">
                </MovieBox>
            </MovieWrapper>
            
        )
    }
}
export default Detail;