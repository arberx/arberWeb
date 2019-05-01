/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
// local includes
import { device } from "./MediaBreak";

const HeaderDiv = styled.div`
	grid-column: rside / lside;
	grid-row: row1-end / third-line;
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 20;
	top: 0;
	left: 0;
	right: 0;
	max-width: 1140px;
	margin-left: auto;
	margin-right: 20px;
`;

const LogoDiv = styled.div`
	margin-top: 10px;
	flex-grow: 1;
`;

const MenuDiv = styled.div`
	display: flex;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
		margin-right: 20px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		flex-direction: row;
	}
`;

const ArberLogoImg = styled.img`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 200px;
		height: 200px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		width: 250px;
		height: 250px;
	}
`;

const ButtonLink = styled.button`
	text-decoration: none;
	font-weight: 700;
	padding: 0;
	color: black;
	text-transform: uppercase;
	cursor: pointer;
	border: none;
	background: none;
	margin: auto;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 14px;
		margin-right: "0em";
		margin-top: "10em";
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 15px;
		margin-right: ${props => props.margin || "0em"};
	}
`;

export default class HeaderComp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { onClickAbout, onClickMain, onClickContact } = this.props;
		return (
			<HeaderDiv>
				<LogoDiv>
					<a href="" onClick={onClickMain}>
						<ArberLogoImg src="../../static/axlogo/axlogo2.svg" alt="Arber X" />
					</a>
				</LogoDiv>
				<MenuDiv>
					<ButtonLink margin="1.5em" onClick={onClickMain}>
						Home
					</ButtonLink>
					<ButtonLink margin="1.5em" onClick={onClickAbout}>
						About
					</ButtonLink>
					<ButtonLink onClick={onClickContact}> Contact </ButtonLink>
				</MenuDiv>
			</HeaderDiv>
		);
	}
}
