import styled from 'styled-components';
import login_bg from '../../statics/login_bg.jpg';
export const LoginWrapper = styled.div`
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

export const LoginBox = styled.div`
	width: 400px;
	height: 300px;
	margin: 100px auto;
	padding-top: 20px;
	background: #00000060;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 32px;
	line-height: 30px;
	padding: 0 10px;
	margin: 20px auto;
	color: #777;
	border-radius:8px
`;

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
export const LoginHead = styled.div`
	color:#B0C4DE;
	width:100px;
	font-size:30px;
	text-align:center;
	margin:10px auto
`;