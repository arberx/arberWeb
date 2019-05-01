/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
import TextLoop from "react-text-loop";
import Fade from "react-reveal/Fade";
// local includes
import ContentDiv from "./ContentDiv";
import { device } from "./MediaBreak";

const Row1 = styled.div`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 25px;
		width: 240px;
		align-self: center;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 30px;
		width: 500px;
	}
	line-height: 1.2em;
`;

const Row2 = styled.div`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 40px;
		width: 300px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 50px;
		width: 350px;
	}
	font-weight: 900;
	display: inline-block;
	position: absoulte;
`;

const Row3 = styled.div`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 25px;
		width: 240px;
		margin-top: 80px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 30px;
		width: 600px;
		margin-top: 150px;
	}
	line-height: 1.2em;
`;

const subjectArray = [
	"AP CompSci.",
	"Java.",
	"C++.",
	"Python.",
	"Web Dev.",
	"JavaScript.",
	"C.",
	"Physics.",
	"Math."
];

export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ContentDiv>
				<Fade left>
					<Row1>Hi, I'm Arber and I teach</Row1>
					<Row2>
						<TextLoop children={subjectArray} interval={3000} />
					</Row2>
					<Row3>
						I'm a software engineer based in NYC, specializing in{" "}
						<strong>Distributed Computing.</strong>
					</Row3>
				</Fade>
			</ContentDiv>
		);
	}
}
