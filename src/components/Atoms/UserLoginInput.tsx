import styled from 'styled-components';

const UserLoginInput = styled.input<React.CSSProperties & {
    placeholderColor?: string;
} 
>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding || '16px'};
    line-height: ${({ lineHeight }) => lineHeight};
    height: ${({ height }) => height || '56px'};
    width: ${({ width }) => width || '100%'};
    border: ${({ border }) => border || '1px solid #e8e8e8'};
    box-sizing: border-box;
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    background-color: ${({backgroundColor}) => backgroundColor || '#ffffff'};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 24px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);


    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${({placeholderColor}) => placeholderColor};
    }
`

export default UserLoginInput;