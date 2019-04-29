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
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
		margin-top: 150px;
		padding-left: 50px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		flex-direction: row;
		margin-top: 300px;
		padding-left: 150px;
	}
	grid-row: fourth-line / fifth-line;
	justify-content: 	grid-column: line1 / line2;
	grid-row: sixth-line;
`;

const PictureDiv = styled.div``;

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
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		flex-direction: row;
	}
	justify-content: space-between;
	width: 300px;
`;

const ULStyle = styled.ul`
	list-style: circle outside none;
`;

const WIASection = styled.section``;
const WCDSection = styled.section`
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		margin-left: 50px;
	}
	margin-right: auto;
`;

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AboutDiv>
				<Fade left>
					<PictureDiv>
						<ArberImg src="../../static/my_picture.jpg" alt="Arber X" />
					</PictureDiv>
					<br />
				</Fade>
				<TextDiv>
					<WIASection>
						<Fade left>
							<h1> Who I am </h1>
							<ULStyle>
								<li> Full-time Software Engineer at top tech company. </li>
								<br />
								<li> Graduate of a top 5 engineering program (Go Blue!). </li>
								<br />
								<li> Tutor/mentor for over 5 years. </li>
							</ULStyle>
						</Fade>
					</WIASection>
					<WCDSection>
						<Fade left>
							<h1> What I do </h1>
							<ULStyle>
								<li> Customized learning plans depending on ability. </li>
								<br />
								<li>
									Custom projects similar to how a programming would be taught at
									a top university.
								</li>
								<br />
							</ULStyle>
						</Fade>
					</WCDSection>
				</TextDiv>
			</AboutDiv>
		);
	}
}
