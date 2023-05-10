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

    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};

    width: ${({width}) => width};
    height: ${({height}) => height};
    border: ${({border}) => border};
    border-radius: ${({borderRadius}) => borderRadius};
    background-color: ${({backgroundColor}) => backgroundColor};
    gap: ${({gap}) => gap};
`;
