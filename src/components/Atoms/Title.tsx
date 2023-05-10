import styled, { CSSProperties } from 'styled-components';

const Title = styled.h1<CSSProperties>`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #2A3249;
`

export default Title;