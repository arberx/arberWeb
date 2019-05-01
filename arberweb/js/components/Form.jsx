/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from "styled-components";
// local includes
import { device } from "./MediaBreak";
import Fade from "react-reveal/Fade";

const FormDiv = styled.div`
	grid-row: third-line / fourth-line;
	grid-column: content;
	display: flex;
	flex-direction: column;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		margin-top: 100px;
		font-size: 15px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		margin-top: 215px;
		font-size: 25px;
		padding-left: 150px;
	}
	align-self: center;
	justify-self: center;
	justify-content: space-evenly;
	line-height: 1.2em;
	width: 100%;
	height: 100%;
`;

const Row1 = styled.div`
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 25px;
		/* width: 240px; */
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		font-size: 30px;
		/* width: 500px; */
	}
	line-height: 1.2em;
`;

const FormRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-self: center;
	justify-self: center;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 300px;
		height: 300px;
	}
	@media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
		width: 500px;
		height: 500px;
	}
`;

const LabelStyle = styled.label`
	font-size: 18px;
	line-height: 20px;
	margin-bottom: 15px;
	padding: 0;
`;

const PError = styled.p`
	color: red;
	margin-bottom: 10px;
`;

const TextArea = styled.input`
	display: inline-block;
	font-size: 30px;
	line-height: 20px;
	border: none;
	outline: 0;
	border-bottom: 1px dashed #000000;
`;

let yup = require("yup");
let schema = yup.object().shape({
	name: yup.string().required(),
	email: yup
		.string()
		.email()
		.required()
});

export default class FormComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			description: "",
			error: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sendPost = this.sendPost.bind(this);
	}

	sendPost() {
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
			description: "",
			error: false
		});
	}

	handleChange(evt) {
		evt.preventDefault();
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		schema.isValid(this.state).then(
			function(valid) {
				if (valid) {
					alert("Success! I'll contact you shortly.");
					this.sendPost();
					this.setState({ error: false });
					event.target.reset();
				} else {
					this.setState({ error: true });
				}
			}.bind(this)
		);
	}

	render() {
		let isError = this.state.error;
		return (
			<FormDiv>
				<Row1>Currently accepting new students, please fill in the information below!</Row1>
				{isError && (
					<PError>
						Please check that the email is valid and the name field isn't blank.
					</PError>
				)}
				<Fade left>
					<FormStyled onSubmit={this.handleSubmit}>
						<FormRow>
							<LabelStyle>
								<strong>Name</strong>
							</LabelStyle>
							<TextArea type="text" name="name" onChange={this.handleChange} />
						</FormRow>
						<FormRow>
							<LabelStyle>
								<strong>Email</strong>
							</LabelStyle>
							<TextArea type="text" name="email" onChange={this.handleChange} />
						</FormRow>
						<FormRow>
							<LabelStyle>
								<strong>What can I do for you?</strong>
							</LabelStyle>
							<TextArea
								type="text"
								placeholder="Help me code Arber!"
								name="description"
								onChange={this.handleChange}
							/>
						</FormRow>
						<FormRow>
							<button type="submit"> Submit </button>
						</FormRow>
						<FormRow />
					</FormStyled>
				</Fade>
			</FormDiv>
		);
	}
}
