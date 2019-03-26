/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const FormDiv = styled.div`
	grid-column: line1 / line2;
	grid-row: fourth-line / last-line;
`;

export default class FormContainer extends React.Component {
	render () {
	  return(
		<FormDiv>
				<Formik
					initialValues={"arber" /** { email, social } */}
					onSubmit={(values, actions) => {
						console.log("submit form!")
					}}
					render={({ errors, status, touched, isSubmitting }) => (
					<Form>
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="div" />  
						<Field type="text" className="error" name="social.facebook" />
						<ErrorMessage name="social.facebook">
						{errorMessage => <div className="error">{errorMessage}</div>}
						</ErrorMessage>
						<Field type="text" name="social.twitter" />
						<ErrorMessage name="social.twitter" className="error" component="div"/>  
						{status && status.msg && <div>{status.msg}</div>}
						<button type="submit" disabled={isSubmitting}>
						Submit
						</button>
					</Form>
					)}
				/>
		</FormDiv>
	  )
	}
};
