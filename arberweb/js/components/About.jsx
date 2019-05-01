/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
// local includes
import { device } from "./MediaBreak";

const AboutDiv = styled.div`
	display: flex;
	flex-direction: column;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		margin-top: 100px;
		font-size: 15px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		flex-direction: column;
		font-size: 25px;
		margin-top: 100px;
	}
	grid-row: third-line / fourth-line;
	grid-column: content;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	align-self: center;
	justify-self: center;
	line-height: 1.2em;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
`;

const ArberImg = styled.img`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 200px;
		height: 200px;
	}
	@media ${device.laptop}, ${device.tablet} {
		width: 250px;
		height: 250px;
	}

	@media ${device.desktop}, ${device.desktopL} {
		width: 300px;
		height: 300px;
	}
	border-radius: 50%;
`;

const TextDiv = styled.div`
	display: flex;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
		/* margin-top: 10px; */
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		flex-direction: column;
		padding-left: 100px;
	}
	justify-content: space-between;
	align-content: center;
	align-self: center;
	justify-self: center;
`;

const H1Style = styled.h1`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 25px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 30px;
	}
`;
const ULStyle = styled.ul`
	list-style: circle outside none;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 15px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 20px;
	}
`;

const WIASection = styled.section``;
const WCDSection = styled.section``;

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AboutDiv>
				<Fade left>
					<ArberImg src="../../static/my_picture.jpg" alt="Arber X" />
				</Fade>
				<TextDiv>
					<Fade left>
						<H1Style> Who I am </H1Style>
						<ULStyle>
							<li> Full-time Software Engineer at top tech company. </li>
							<br />
							<li> Graduate of a top 5 engineering program (Go Blue!). </li>
							<br />
							<li> Tutoring/mentoring for over 5 years. </li>
						</ULStyle>
					</Fade>
					<Fade left>
						<H1Style> What I do </H1Style>
						<ULStyle>
							<li> Customized learning plans depending on ability. </li>
							<br />
							<li>
								Custom projects similar to how a programming would be taught at a
								top university.
							</li>
							<br />
							<li>Able to teach at all skills and age levels!</li>
						</ULStyle>
					</Fade>
				</TextDiv>
			</AboutDiv>
		);
	}
}
