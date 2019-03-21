/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";

import Root from "./styles/Root";
import Header from "./styles/Header";
import styled from 'styled-components';
import Content from "./styles/Content";
import Section from "./styles/Section";
import { H1, H2, H3 }  from "./styles/BasicElements";

const NameDiv = styled.div`
     flex-grow: 1;
     font-size: 16px;
`;
export default class App extends React.Component {
  render () {
    return(
      // <Root>
        <Header>
          <NameDiv>
              Arber X
          </NameDiv>
        </Header>
      // </Root>
    )
  }

}
