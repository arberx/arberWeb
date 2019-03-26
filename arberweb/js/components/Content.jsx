/*
arberweb
Arber Xhindoli github:@arberx
*/
import React from "react";
import styled from 'styled-components';

/*
    This component wraps content using RootGrid as a template.
*/

const ContentDiv = styled.div `
    grid-column: line1 / line2;
    grid-row: third-line / fourth-line;
`;

const subjectArray = ['AP Computer Science', 'Java', 'C++', 'Python', 'Web Development', 'JavaScript', 'C', 'Physics', 'Math'];

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subjectId: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
          let currentId = this.state.subjectId;
          this.setState({ subjectId: currentId + 1 });
        }, 3000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timeout);
      }

    render () {
        let subjectText = subjectArray[this.state.subjectId % subjectArray.length];
        return(
            <ContentDiv>
                <h3> My name is Arber and I teach </h3>
                <h1> <b>{subjectText}.</b> </h1>
            </ContentDiv>
         )
    }
};
