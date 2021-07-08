import styled from 'styled-components';

export const MovieWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background-color: #0F0F1E;
	background-repeat:no-repeat;
	background-size:100% 100%
`
export const MovieHeader = styled.div`
    display: inline-block;
    width:80%;
    height: 40px;
    margin-top: 10px;
    margin-left:10%;
`
export const MovieTitle = styled.div`
    display: inline-flex;
    font-size: xx-large;
    color: white;
`
export const MovieScore = styled.div`
    margin-left: 2%;
    display: inline-block;
    font-size: x-large;
    color: #FF5C38;
`
export const MovieActor = styled.div`
    margin-left: 2%;
    display: inline-flex;
    font-size: large;
    color: white;
`

export const MovieBox = styled.iframe`
    display: inline-block;
    width:80%;
    height: 600px;
    margin-top:10px;
    margin-left:10%;
    border: 1px solid #0F0F1E;
`
