import { View, Keyboard, ScrollView, KeyboardAvoidingView, Dimensions, Text } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import Input from "../InputComponent/InputComponent";
import Button from "../ButtonComponent/Button";
import { ImgWrapper, LoginWrapper, PlusIconWrapper, KeyboardStyled, TitleReg, LinkWrapper, Paragraph, ShowPasswordReg, NavigationLog_Reg } from '../LoginScreen/StyledLoginScreen';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const RegistrationScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [userPhoto, setUserPhoto] = useState(null);   

    const navigation = useNavigation();

   const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }; 

    return (
        <PostsScreen>
        <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <LoginWrapper
                    // isKeyboardOpen={isKeyboardOpen}
                >
                    <ImgWrapper>
                        <PlusIconWrapper>
                            <MaterialIcons name="control-point" size={25} color='#FF6C00' />
                        </PlusIconWrapper>
                    </ImgWrapper>
            <TitleReg>Реєстрація</TitleReg>
            <View>
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Username' />
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Email' />
               <Input
                            placeholder='Пароль'
                            type={passwordShow === false && 'password'}
                        />
                        <ShowPasswordReg onPress={handleShowPassword}>{passwordShow === false ? 'Показати' : 'Сховати'}</ShowPasswordReg>
                <Button title='Зареєстуватися'></Button>
                    </View>
                    <LinkWrapper>
                    <Paragraph>Вже є акаунт?{' '}</Paragraph>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <NavigationLog_Reg>Увійти</NavigationLog_Reg>
                        </TouchableOpacity>
                        </LinkWrapper>
                </LoginWrapper>
        </ScrollView>
        </PostsScreen>
    )
}

export default RegistrationScreen; 