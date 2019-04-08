/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
// local includes
import ContentDiv from "./ContentDiv";

export default class About extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <ContentDiv row="fourth-line / fifth-line">
                    <Fade left>
                         About
                     </Fade>
               </ContentDiv>
          )
     }
};
