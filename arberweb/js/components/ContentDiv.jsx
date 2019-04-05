/*
arberweb
Arber Xhindoli github:@arberx
*/

import styled from 'styled-components';
// local includes
import { device } from './MediaBreak';
/*
    This component wraps content using RootGrid as a template.
*/
const ContentDiv = styled.div`
    grid-column: rside / lside;
    grid-row: third-line / last-line;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 215px;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 40px;
    text-align: left;
    line-height: 3.4em;
`;

export default ContentDiv;

