/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
// local includes
import { device } from "./MediaBreak";

const FormDiv = styled.div`
	display: flex;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
		margin-top: 150px;
		padding-left: 150px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		flex-direction: row;
		margin-top: 300px;
		padding-left: 150px;
	}
	grid-row: fifth-line / sixth-line;
	justify-content: space-between;
`;

export default class FormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			description: "If you want, tell me a little about what you're looking for!"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.name,
			email: event.target.email,
			description: event.target.description
		});
	}

	handleSubmit(event) {
		alert("An essay was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<FormDiv>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<textarea value={this.state.name} onChange={this.handleChange} />
					</label>
					<label>
						Email:
						<textarea value={this.state.email} onChange={this.handleChange} />
					</label>
					<label>
						What are you looking for:
						<textarea value={this.state.description} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</FormDiv>
		);
	}
}
