import React from 'react';
import {
    MovieWrapper,
    MovieHeader,MovieTitle,MovieScore,MovieActor,MovieBox
} from './style'
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie:{
                title: this.props.location.query.title, 
                score: this.props.location.query.score, 
                actor: this.props.location.query.actor,
                source:this.props.location.query.source}
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