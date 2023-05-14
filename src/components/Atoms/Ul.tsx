import styled, { CSSProperties } from 'styled-components';

export default styled.ul<CSSProperties>`
    z-index: ${({zIndex}) => zIndex};
    ${({display}) => display && `display : ${display}`};
    flex-direction: ${({flexDirection}) => flexDirection};
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: ${({alignItems}) => alignItems};
    ${({ flexWrap }) => flexWrap && `flex-wrap : ${flexWrap}`};
    ${({ flexShrink }) => flexShrink && `flex-shrink : ${flexShrink}`};
    ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};

    position: ${({position}) => position};
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};

    margin: ${({margin}) => margin ? margin : "0"};
    padding: ${({padding}) => padding ? padding : "0"};
    overflow: ${({overflow}) => overflow};
    width: ${({width}) => width};
    height: ${({height}) => height};
    max-width: ${({maxWidth}) => maxWidth};
    max-height: ${({maxHeight}) => maxHeight};
    border: ${({border}) => border};
    border-radius: ${({borderRadius}) => borderRadius};
    background-color: ${({backgroundColor}) => backgroundColor};
    gap: ${({gap}) => gap};
`;
