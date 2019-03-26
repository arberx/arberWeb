
import React from "react";
import styled from 'styled-components';

const AboutDiv = styled.div `
    grid-column: line1 / line2;
    grid-row: third-line / fourth-line;
`;

export default class About extends React.Component {
     constructor(props) {
          super(props);
     }
     render () {
          return(
              <AboutDiv>
                About
              </AboutDiv>
          )
     }
};
