/*
arberweb
Arber Xhindoli github:@arberx
*/

import styled from 'styled-components';
/*
    Wraps all other elements, sets defaults.
*/
const RootGrid = styled.div`
    display: grid;
    grid-template-columns: [first] 50px [line1] auto [line2] 50px [end];
    grid-template-rows: [row1-start] 80px [row1-end] 100px [third-line] 100px [fourth-line] auto [last-line];
    line-height: 1.3;
    font-family: Source Sans Pro,sans-serif;
    font-size: 16px;
`

export default RootGrid;
