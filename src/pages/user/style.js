import styled from 'styled-components';
import login_bg from '../../statics/login_bg.jpg';
export const UserWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: url(${login_bg});
	background-repeat:no-repeat;
	background-size:100% 100%;
`;