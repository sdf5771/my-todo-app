import styled from 'styled-components';

const Input = styled.input<React.CSSProperties & {
    placeholderColor?: string;
} 
>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding || '8px'};
    line-height: ${({ lineHeight }) => lineHeight};
    height: ${({ height }) => height || '40px'};
    width: ${({ width }) => width || '100%'};
    border: ${({ border }) => border || '1px solid #e8e8e8'};
    box-sizing: border-box;
    border-radius: ${({ borderRadius }) => borderRadius || '8px'};
    background-color: ${({backgroundColor}) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize || '16px'};

    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${({placeholderColor}) => placeholderColor};
    }
`

export default Input;