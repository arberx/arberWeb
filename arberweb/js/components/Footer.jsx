/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
// local includes
import { device } from "./MediaBreak";

const FooterDiv = styled.div`
	grid-column: content;
	grid-row: fifth-line;
	display: flex;
	position: absoulte;
	justify-content: space-evenly;
	align-self: center;
	flex-direction: row;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		margin-top: 50px;
		width: 100%;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		width: 50%;
		padding-left: 150px;
	}
	margin-bottom: 50px;
`;

const ImgDiv = styled.img`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 40px;
		height: 40px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		width: 50px;
		height: 50px;
	}
`;

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<FooterDiv>
				<a href="https://www.facebook.com/arberxhindoli">
					<ImgDiv
						src="../../static/iconfinder_facebook_online_social_media_734399.svg"
						alt="Arber X Facebook"
					/>
				</a>
				<a href="https://www.github.com/arberx">
					<ImgDiv
						src="../../static/iconfinder_github_social_media_logo_1221583.svg"
						alt="Arber X Github"
					/>
				</a>
				<a href="https://www.linkedin.com/in/arberx">
					<ImgDiv
						src="../../static/iconfinder_online_social_media_linked_in_734383.svg"
						alt="Arber X Linkedin"
					/>
				</a>
			</FooterDiv>
		);
	}
}
