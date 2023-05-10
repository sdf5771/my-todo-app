import styled from 'styled-components';

export default styled.label<React.CSSProperties>`
    font-family: ${({fontFamily}) => fontFamily || 'Poppins'};
    font-weight: ${({fontWeight}) => fontWeight || '400'};
    font-size: ${({fontSize}) => fontSize || '14px'};
    line-height: ${({lineHeight}) => lineHeight || '178%'};
    color: ${({color}) => color || '#2A3249'};
`;