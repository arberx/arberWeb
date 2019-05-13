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
  grid-column: content;
  grid-row: ${props => props.row || third - line / fourth - line};
  display: flex;
  flex-direction: column;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    margin-top: 100px;
    padding-left: 50px;
  }
  @media ${device.laptop},
    ${device.tablet},
    ${device.desktop},
    ${device.desktopL} {
    margin-top: 250px;
  }
  text-align: left;
  line-height: 3.4em;
  align-self: center;
  justify-self: center;
  justify-content: center;
`;

export default ContentDiv;
