/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
// local includes

const AboutDiv = styled.div`
	display: flex;
	flex-direction: row;
	grid-column: rside / lside;
	padding-top: 200px;
    /* margin-left: auto;
    margin-right: auto; */
    padding-left: 30%; 
    grid-row: fourth-line / fifth-line;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 100%;
`;

const PictureDiv = styled.div`
`;

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const WIASection = styled.section`
`;

const WCDSection = styled.section`
`;
export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AboutDiv>
				<PictureDiv>
					Picture
					</PictureDiv>
				<TextDiv>
					<WIASection>
						<h1> Who I am </h1>
						<p> I'm a professional software engineer</p>
					</WIASection>
					<WCDSection>
						<h1> What I can do for you </h1>
					</WCDSection>
				</TextDiv>
			</AboutDiv>
		)
	}
};
