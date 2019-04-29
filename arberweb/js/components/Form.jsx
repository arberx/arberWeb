/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
// local includes
import { device } from "./MediaBreak";
import Fade from "react-reveal/Fade";
import ContentDiv from "./ContentDiv";

const FormRow = styled.div`
	display: block;
	margin: 0 0 80px;
`;

const P = styled.p`
	margin: 0;
`;

const LabelStyle = styled.label`
	font-size: 18px;
	line-height: 40px;
	padding: 0;
	margin: 0 0 24px;
`;

const TextArea = styled.textarea`
	display: inline-block;
	font-size: 30px;
	line-height: 40px;
	border: none;
	outline: 0;
	border-bottom: 1px dashed #000000;
	transition: color 0.2s ease-out;
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
		event.preventDefault();
		fetch("/form_submission", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(this.state)
		})
			.then(result => result.json())
			.then(info => {
				console.log(info);
			});
		this.setState({
			name: "",
			email: "",
			description: ""
		});
	}

	render() {
		return (
			<ContentDiv row="fifth-line / sixth-line">
				<Fade left>
					<form onSubmit={this.handleSubmit}>
						<FormRow>
							<LabelStyle>
								Name:
								<P>
									<TextArea
										value={this.state.name}
										onChange={this.handleChange}
									/>
								</P>
							</LabelStyle>
							<LabelStyle>
								<P>
									Email:
									<TextArea
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</P>
							</LabelStyle>
							<LabelStyle>
								<P>
									What are you looking for:
									<TextArea
										value={this.state.description}
										onChange={this.handleChange}
									/>
								</P>
							</LabelStyle>
							<input type="submit" value="Submit" />
						</FormRow>
					</form>
				</Fade>
			</ContentDiv>
		);
	}
}
