/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
// local includes
import ContentDiv from "./ContentDiv";
import { device } from "./MediaBreak";

const AboutFlex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	flex-direction: row;
`;

const TextDiv = styled.div``;
const PictureDiv = styled.div``;
export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ContentDiv row="fourth-line / fifth-line">
				<AboutFlex>
					<Fade left>
						<PictureDiv>Arber's Picture</PictureDiv>
						<TextDiv />
					</Fade>
				</AboutFlex>
			</ContentDiv>
		);
	}
}
