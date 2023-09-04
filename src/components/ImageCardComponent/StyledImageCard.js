import styled from 'styled-components/native'

export const Container = styled.View`
    justify-content: center;
    gap: 8px;
    padding-top: 32px;
`;

export const Image = styled.ImageBackground`
    width: 100%;
    height: 240px;
    border-radius: 8px;
    overflow: hidden;
`;

export const ImgTitle = styled.Text`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #212121;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 24px;
`;

export const InfoWrapper = styled.View`
    flex-direction: row;
    gap: 6px;
`;

export const ComentsTitle = styled.Text`
    font-size: 16px;
    color: #BDBDBD;
`;

export const LocationTitle = styled.Text`
    font-size: 16px;
    color: #212121;
    text-decoration-line: underline;
`;