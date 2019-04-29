/*
arberweb
Arber Xhindoli github:@arberx
*/

import styled from "styled-components";
// local includes
import { device } from "./MediaBreak";

/*
    This component wraps content using RootGrid as a template.
*/
const ContentDiv = styled.div`
	grid-column: rside / lside;
	grid-row: ${props => props.row || "third-line / fourth-line"};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		margin-top: 150px;
		padding-left: 50px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		margin-top: 215px;
		padding-left: 600px;
	}
	max-width: 1140px;
	margin-left: auto;
	margin-right: auto;
	text-align: left;
	line-height: 3.4em;
`;

export default ContentDiv;
