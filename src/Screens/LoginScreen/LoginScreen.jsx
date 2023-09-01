import { View, Keyboard, ScrollView, TouchableWithoutFeedback ,KeyboardAvoidingView, Dimensions, Text } from "react-native";
import BGImg from "../../components/BGScreensComponent/BGImg";
import Input from "../../components/InputComponent/InputComponent";
import Button from "../../components/ButtonsComponents/Button";
import * as yup from 'yup';
import { LoginWrapper, KeyboardStyled, Title, Paragraph, LinkWrapper, NavigationLog_Reg, ShowPasswordLog } from './StyledLoginScreen';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const validationSchema = yup.object().shape({
    email: yup.string().email('Невірний формат емайлу').required('Ведіть емайл'),
    password: yup.string().required('Ведіть пароль'),
});

const LoginScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    // const [keyboardHeight, setKeyboardHeight] = useState(0);
    // const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        email: '',
        password: '',
    });

    const navigation = useNavigation();

    const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    };

    const handleSubmit = () => {
        validationSchema
            .validate(formData, { abortEarly: false })
            .then(() => {
                console.log('Дані форми:', formData);
                setValidationErrors({
                    email: '',
                    password: '',
                });
                navigation.replace('Home', {
                    screen: 'Публікації',
                    params: {email: formData.email},
                });
            })
            .catch((errors) => {
                const newErrors = {};
                errors.inner.forEach((error) => {
                    newErrors[error.path] = error.massage;
                });
                setValidationErrors(newErrors);
            });
    };

    // useEffect(() => {
    //     const keyboardDidShowListener = Keyboard.addListener(
    //         'keyboardDidShow',
    //         (e) => {
    //             setKeyboardHeight(e.endCoordinates.height);
    //             setIsKeyboardOpen(true)
    //         }
    //     );
    //     const keyboardDidHideListener = Keyboard.addListener(
    //         'keyboardDidHide',
    //         () => {
    //             setKeyboardHeight(0);
    //             setIsKeyboardOpen(false)
    //         }
    //     );
    
    //     return () => {
    //         keyboardDidShowListener.remove();
    //         keyboardDidHideListener.remove();
    //     };
    // }, []);

    return (
        <BGImg>
            {/* <KeyboardAvoidingView
            > */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LoginWrapper
                    // isKeyboardOpen={isKeyboardOpen}
                >
                <Title>Увійти</Title>
                    <View>
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Адреса електронної пошти'
                            onValueChange={(value, validationErrors) => {
                                setFormData({...formData, email: value });
                                setValidationErrors({ ...validationErrors, email: 'Невірний формат емайлу(example@example.com)' });
                            }}
                            value={formData.email}
                        />
                        {validationErrors.email && <Text style={{ color: 'red' }}>{validationErrors.email}</Text>}

                        <Input
                            placeholder='Пароль'
                            type={passwordShow === false && 'password'}
                            onValueChange={(value, validationErrors) => {
                                setFormData({ ...formData, password: value });
                                setValidationErrors({ ...validationErrors, password: 'Заповніть поле' });
                                
                            }}
                            value={formData.password}
                        />
                        {validationErrors.password && <Text style={{ color: 'red' }}>{validationErrors.password}</Text>}

                        <ShowPasswordLog onPress={handleShowPassword}>{passwordShow === false ? 'Показати' : 'Сховати'}</ShowPasswordLog>
                        <Button title='Увійти' onPress={handleSubmit}></Button>
                    </View>
                    <LinkWrapper>
                    <Paragraph>Немає акаунту?{' '}</Paragraph>
                        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                            <NavigationLog_Reg>Зареєструватися</NavigationLog_Reg>
                        </TouchableOpacity>
                    </LinkWrapper>
                    </LoginWrapper>
                    </TouchableWithoutFeedback>
                </ScrollView>
                {/* </KeyboardAvoidingView> */}
        </BGImg>
    )
}

export default LoginScreen; 