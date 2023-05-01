import styled from 'styled-components';

const Button = styled.button<React.CSSProperties>`
    display: ${({ display }) => display || 'inline-flex'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    align-content: ${({ alignContent }) => alignContent || 'center'};
    ${({ flexDirection }) =>
        flexDirection && `flex-direction : ${flexDirection}`};

    margin: ${({ margin }) => margin};
    ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
    ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
    ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
    ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
    padding: ${({ padding }) => padding};
    background: ${({ background }) => background || 'white'};
    color: ${({ color }) => color};

    border: ${({ border }) => border || 'none'};
    box-sizing: ${({ boxSizing }) => boxSizing};
    border-radius: ${({ borderRadius }) => borderRadius};

    z-index: ${({ zIndex }) => zIndex};
    ${({ letterSpacing }) =>
        letterSpacing && `letter-spacing : ${letterSpacing}`};

    ${({ textAlign }) => textAlign && `text-align : ${textAlign}`};
    ${({ boxShadow }) => boxShadow && `box-shadow : ${boxShadow}`};
    font-size: ${({ fontSize }) => fontSize || '14px'};
    font-weight: ${({ fontWeight }) => fontWeight || '700'};
    height: ${({ height }) => height};
    line-height: ${({ lineHeight }) => lineHeight};
    width: ${({ width }) => width};

    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    :focus {
        outline: 0;
        -webkit-appearance: none;
    }
`

export default Button;