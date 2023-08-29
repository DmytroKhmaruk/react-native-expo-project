import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

export const KeyboardStyled = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const LoginWrapper = styled.View`
    background-color: #ffffff;
    border-radius: 25px 25px 0px 0px;
    margin-top: auto;
    /* margin-top: ${props => props.isKeyboardOpen
        ? `${Math.min(Dimensions.get('window').height * 0.4, 312)}px`
        : `${Math.min(Dimensions.get('window').height * 0.7, 446)}px`}; */
    padding: 32px 16px 111px 16px;
    position: relative;
    overflow: visible;
`;

export const Title = styled.Text`
display: flex;
    color: #212121;
text-align: center;
font-size: 30px;
font-weight: 500;
letter-spacing: 0.3px;
margin-bottom: 33px;
`;

export const TitleReg = styled(Title)`
    margin-top: 32px;
`;

export const Paragraph = styled.Text`
    text-align: center;

    color: #1B4371;
    font-size: 16px;
    font-weight: 400;
`;

export const LinkWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NavigationLog_Reg = styled(Paragraph)`
    text-decoration: underline;
`;

export const ShowPassword = styled.Text`
    position: absolute;
    top: 50%;
    right: 16px;

    color: #1B4371;
    font-size: 16px;
    font-weight: 400;
`;

export const ShowPasswordLog = styled(ShowPassword)`
    margin-top: -30px;
`;

export const ShowPasswordReg = styled(ShowPassword)`
    margin-top: 10px;
`;

export const ImgWrapper = styled.View`
    position: absolute;
    top: -60px;
    left: 38%;

    width: 120px;
    height: 120px;
    border-radius: 16px;
    background: #F6F6F6;
`;

export const PlusIconWrapper = styled.View`
    position: absolute;
    bottom: 14px;
    right: -12px;
`;

