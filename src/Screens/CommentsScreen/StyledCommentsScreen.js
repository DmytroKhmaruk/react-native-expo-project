import styled from 'styled-components/native'

export const InputContainer = styled.View`
    flex-direction: row;
    padding: 8px 8px 8px 16px;
    width: 100%;
    height: 50px;
    background-color: #F6F6F6;
    border: 1px solid #E8E8E8;
    border-radius: 25px;
    margin-top: auto;
`;

export const Input = styled.TextInput`
    flex-grow: 1;
    color: #212121;
    font-size: 16px;
    font-weight: 500;
`;