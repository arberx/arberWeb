/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
// local includes
import RootGrid from "./components/RootGrid";
import HeaderComp from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";
import FormComponent from "./components/Form";
import styled from "styled-components";
// local includes
import { device } from "./components/MediaBreak";

const WIPdiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  width: 500px;
  font-weight: 1200;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-self: center;
  justify-content: center;
  grid-column: content;
  grid-row: third-line / fourth-line;
`;

const ArberLogoImg = styled.img`
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    width: 200px;
    height: 200px;
  }
  @media ${device.laptop},
    ${device.tablet},
    ${device.desktop},
    ${device.desktopL} {
    width: 500px;
    height: 500px;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { about_clicked: false, contact_clicked: false };
    this.replaceContent = this.replaceContent.bind(this);
    this.mainClicked = this.mainClicked.bind(this);
    this.contactClicked = this.contactClicked.bind(this);
  }

  mainClicked() {
    // this function will be passed as a callback to Header
    this.setState({ about_clicked: false, contact_clicked: false });
  }

  replaceContent() {
    // this function will be passed as a callback to Header
    this.state.about_clicked
      ? this.setState({ about_clicked: false })
      : this.setState({ about_clicked: true });
    this.setState({ contact_clicked: false });
  }

  contactClicked() {
    this.setState({ contact_clicked: true, about_clicked: false });
  }

  render() {
    const isClicked = this.state.about_clicked;
    const isContact = this.state.contact_clicked;
    let MainContent;
    if (isContact) {
      MainContent = <FormComponent />;
    } else {
      MainContent = isClicked ? <About /> : <Content />;
    }
    return (
      <RootGrid>
        {/* //   <HeaderComp
        // onClickAbout={this.replaceContent}
        // onClickMain={this.mainClicked}
        // onClickContact={this.contactClicked}
        // /> // {MainContent} */}
        {/* // <Footer /> */}
        <WIPdiv>
          <ArberLogoImg src="../../static/axlogo/axconsultinghorizontal.svg" />
          <h3>WIP</h3>
        </WIPdiv>
      </RootGrid>
    );
  }
}
