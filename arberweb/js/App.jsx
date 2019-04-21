/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
// local includes
import RootGrid from "./components/RootGrid";
import Content from "./components/Content";
import About from "./components/About";
import ContentDiv from "./components/ContentDiv";

export default class App extends React.Component {
	constructor(props) {
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
		this.state.about_clicked
			? this.setState({ about_clicked: false })
			: this.setState({ about_clicked: true });
	}

	render() {
		const isClicked = this.state.about_clicked;
		let MainContent = isClicked ? <About /> : <Content />;
		return (
			<RootGrid>
				<ContentDiv>
					<p>
						This page is in progress! Check out my
						<a href="/"> homepage</a> for more information about me.
					</p>
				</ContentDiv>
			</RootGrid>
		);
	}
}
