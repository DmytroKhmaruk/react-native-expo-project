import styled from 'styled-components/native'

export const UserWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    height: 60px;
`;

export const AvatarWrapper = styled.View`
    height: 60px;
    width: 60px;
    border-radius: 16px;
    overflow: hidden;
    background: #F6F6F6;
`;

export const Image = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`;

export const InfoWrapper = styled.View`

`;

export const Login = styled.Text`
    font-size: 13px;
    font-weight: 700;
    color: rgba(33, 33, 33, 0.80);
`;

export const Email = styled.Text`
    font-size: 11px;
    color: #212121;
`;