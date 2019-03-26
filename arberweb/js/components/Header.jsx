/*
arberweb
Arber Xhindoli github:@arberx
*/

import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
     grid-column: line1 / line2;
     grid-row: row1-end / third-line;
     background-color: #ffffff;
`;
 
export default class HeaderComp extends React.Component {
     constructor(props) {
          super(props);
     }

     render () {
          const { onClickAbout, onClickMain } = this.props;
          return(
               <HeaderDiv>
                    <a href="" onClick={onClickMain} > <img alt={"logo"}/> </a>
                    <button onClick={onClickAbout} > About </button>
               </HeaderDiv>
          )
     }
};
