import styled from 'styled-components/native'

export const InputWrapper = styled.View`

`;

export const StyledInput = styled.TextInput`
    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${({ isFocused }) => ( isFocused ? '#FF6C00' : '#E8E8E8')};
    background-color: #F6F6F6;
    color: #212121;
    font-size: 16px;
    font-weight: 400;
    ${({ customStyle }) => customStyle}
`;