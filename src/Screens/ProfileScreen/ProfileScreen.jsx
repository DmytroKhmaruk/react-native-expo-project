import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import BGImg from "../../components/BGScreensComponent/BGImg";
import { LoginWrapper, LogoutBtnWrapper, LogoutBtnRight ,Title } from "../LoginScreen/StyledLoginScreen";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import LogoutBtn from "../../components/ButtonsComponents/LogoutBtn";

const ProfileScreen = () => {
    return (
        <BGImg>
            <LoginWrapper>
                <LogoutBtn />
                <UserAvatar />
                <Title>Khmaruk Dmytro</Title>
            </LoginWrapper>
        </BGImg>
    )
}

export default ProfileScreen;