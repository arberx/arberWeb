/*
arberweb
Arber Xhindoli github:@arberx
*/

import styled from "styled-components";

/*
    Wraps all other elements, sets defaults.
*/
const RootGrid = styled.div`
	display: grid;
	@import url("https://fonts.googleapis.com/css?family=Montserrat");
	font-family: "Montserrat", sans-serif;
	color: black;
	font-size: 16px;
	grid-template-columns: [rside] 1fr [content] 2fr [lside] 1fr;
	grid-template-rows: [row1-start] 60px [row1-end] 100px [third-line] 1fr [fourth-line] 1fr [fifth-line] 1fr [sixth-line];
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export default RootGrid;
