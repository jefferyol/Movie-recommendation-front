import styled from 'styled-components';
import login_bg from '../../statics/login_bg.jpg';
export const RegWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: url(${login_bg});
	background-repeat:no-repeat;
	background-size:100% 100%
`;
export const RegBox = styled.div`
	width: 400px;
	height: 360px;
	margin: 100px auto;
	padding-top: 20px;
	background: #00000060;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const RegText = styled.span`
    color:#B0C4DE;
    margin-left:16%;
    text-align:right;
`;
export const Input = styled.input`
    width:48%;
    height:10%;
    margin-left:2%;
    margin-top:3%;
    border-radius:8px;
`

export const Button = styled.div`
	width: 200px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 25px auto;
	text-align: center;
	cursor:pointer;
`;
export const RegHead = styled.div`
	color: #B0C4DE;
	width:100px;
	font-size:30px;
	text-align:center;
	margin:10px auto
`;