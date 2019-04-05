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
    font-family: Source Sans Pro,sans-serif;
    font-size: 16px;
    grid-template-columns: [rside] 1fr [content] 2fr [lside] 1fr;
    grid-template-rows: [row1-start] 60px [row1-end] 60px [third-line] auto [last-line];
`

export default RootGrid;
