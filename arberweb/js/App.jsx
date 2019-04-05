/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";

import RootGrid from "./components/RootGrid";
import HeaderComp from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import FormContainer from "./components/Form";

export default class App extends React.Component {
  constructor(props) {
    // TODO: add loading icon on componentWillMount
    super(props);
    this.state = { about_clicked: false };
    this.replaceContent = this.replaceContent.bind(this);
    this.mainClicked = this.mainClicked.bind(this);
  }

  mainClicked() {
    // this function will be passed as a callback to Header
    this.setState({ about_clicked: false });
  }

  replaceContent() {
    // this function will be passed as a callback to Header
    this.state.about_clicked ? this.setState({ about_clicked: false }) :
      this.setState({ about_clicked: true });
  }

  render() {
    const isClicked = this.state.about_clicked;
    let MainContent = isClicked ? <About /> : <Content />;

    return (
      <RootGrid>
        <HeaderComp onClickAbout={this.replaceContent} onClickMain={this.mainClicked} />
        {MainContent}
        {/* <FormContainer/> */}
      </RootGrid>
    )
  }
}
