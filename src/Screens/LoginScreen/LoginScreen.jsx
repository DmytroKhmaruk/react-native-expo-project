import { View, Keyboard, ScrollView, KeyboardAvoidingView, Dimensions, Text } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import Input from "../InputComponent/InputComponent";
import Button from "../ButtonComponent/Button";
import { LoginWrapper, KeyboardStyled, Title, Paragraph, LinkWrapper, NavigationLog_Reg, ShowPasswordLog } from './StyledLoginScreen';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    const navigation = useNavigation();

    const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
                setKeyboardHeight(e.endCoordinates.height);
                setIsKeyboardOpen(true)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardHeight(0);
                setIsKeyboardOpen(false)
            }
        );
    
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <PostsScreen>
            {/* <KeyboardAvoidingView
            > */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <LoginWrapper
                    // isKeyboardOpen={isKeyboardOpen}
                >
                <Title>Увійти</Title>
                    <View>
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Адреса електронної пошти' />
                        <Input
                            placeholder='Пароль'
                            type={passwordShow === false && 'password'}
                        />
                        <ShowPasswordLog onPress={handleShowPassword}>{passwordShow === false ? 'Показати' : 'Сховати'}</ShowPasswordLog>
                        <Button title='Увійти'></Button>
                    </View>
                    <LinkWrapper>
                    <Paragraph>Немає акаунту?{' '}</Paragraph>
                        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                            <NavigationLog_Reg>Зареєструватися</NavigationLog_Reg>
                        </TouchableOpacity>
                    </LinkWrapper>
                </LoginWrapper>
                </ScrollView>
                {/* </KeyboardAvoidingView> */}
        </PostsScreen>
    )
}

export default LoginScreen; 