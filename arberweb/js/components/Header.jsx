/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from 'styled-components';
// local includes
import { device } from './MediaBreak';

const HeaderDiv = styled.div`
     grid-column: rside / lside;
     grid-row: row1-end /  third-line;
     display: flex;
     align-items: center;
     position: absolute;
     z-index: 20;
     top: 0;
     left: 0;
     right: 0;
     margin-top: 30px;
     max-width: 1140px;
     margin-left: auto;
     margin-right: auto;
     padding: 0 30px;
`;

const LogoDiv = styled.div`
     flex-grow: 1;
`;

const MenuDiv = styled.div`
     display: flex;
     @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
          flex-direction: column;
     };
     @media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
          flex-direction: row;
     };
`;

const ButtonLink = styled.button`
     text-decoration: none;
     font-size: 20px;
     padding: 0;
     cursor:pointer;
     border: none;
     background: none;
     @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
          margin-right: "0em";
     }
     @media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
          margin-right: ${props => props.margin || "0em"};
     };
`

export default class HeaderComp extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          const { onClickAbout, onClickMain } = this.props;
          return (
               <HeaderDiv>
                    <LogoDiv>
                         <a href="" onClick={onClickMain}>
                              <img style={{width: '200px', height: '200px'}} src="../../static/ax logo/axlogo2withtext.svg" alt={"Arber X"} />
                         </a>
                    </LogoDiv>
                    <MenuDiv>
                         <ButtonLink margin="1.5em" onClick={onClickMain}> Home </ButtonLink>
                         <ButtonLink onClick={onClickAbout} > About </ButtonLink>
                    </MenuDiv>
               </HeaderDiv>
          )
     }
};
