/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from 'styled-components';
import TextLoop from "react-text-loop";
// local includes
import ContentDiv from "./ContentDiv";
import { device } from './MediaBreak';

const Row1 = styled.div`
     @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        font-size: 25px;
        width: 240px;
     };
     @media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
        width: 500px;
        font-size: 30px;
     };
    line-height: 1.2em;
`;

const Row2 = styled.div`
     @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        font-size: 45px;
     };
     @media ${device.laptop}, ${device.tablet}, ${device.desktop}, ${device.desktopL} {
        font-size: 50px;
     };
    font-weight: 900;
    display: inline-block;
    position: relative;
    color: black;
`;

const subjectArray = ['AP CompSci.', 'Java.', 'C++.', 'Python.', 'Web Dev.', 'JavaScript.', 'C.', 'Physics.', 'Math.'];

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ContentDiv>
                {/* TODO: Larger screen indent content a little */}
                <Row1>
                    My name is Arber and I teach
                </Row1>
                <Row2>
                    <TextLoop children={subjectArray} interval={3000} />
                </Row2>
            </ContentDiv>
        )
    }
};
