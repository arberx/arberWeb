/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import Root from "./styles/Root";
import Header from "./styles/Header";
import Content from "./styles/Content";
import Section from "./styles/Section";
import { H1, H2, H3 }  from "./styles/BasicElements";

export default class App extends React.Component {
  render () {
    return(
      <Root>
        <Header />
          <Content>
            <Section>
              {/* Intro */}
            </Section>
          </Content>
      </Root>
    )
  }
}
