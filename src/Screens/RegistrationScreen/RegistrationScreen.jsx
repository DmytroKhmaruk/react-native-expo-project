import { View, Keyboard, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, Text } from "react-native";
import * as yup from 'yup';
import BGImg from "../../components/BGScreensComponent/BGImg";
import Input from "../../components/InputComponent/InputComponent";
import SubmitButton from "../../components/ButtonsComponents/SubmitButton";
import { LoginWrapper, KeyboardStyled, TitleReg, LinkWrapper, Paragraph, ShowPasswordReg, NavigationLog_Reg } from '../LoginScreen/StyledLoginScreen';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserAvatar from "../../components/UserAvatar/UserAvatar";

const validationSchema = yup.object().shape({
    login: yup.string().required('Ведіть логін'),
    email: yup.string().email('Невірний формат емайлу').required('Ведіть емайл'),
    password: yup.string().required('Ведіть пароль'),
});

const RegistrationScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        login: '',
        email: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        login: '',
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
                    login: '',
                    email: '',
                    password: '',
                });
                navigation.replace('Home', {
                    screen: 'Публікації',
                    params: {
                        email: formData.email, login: formData.login, uri: image
                    },
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

    return (
        <BGImg>
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
                    <UserAvatar setImage={setImage} image={image} />
            <TitleReg>Реєстрація</TitleReg>
            <View>
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Логін'
                            onValueChange={(value, validationErrors) => {
                                setFormData({...formData, login: value });
                                setValidationErrors({ ...validationErrors, login: 'Заповніть поле' });
                            }}
                            value={formData.login}
                        />
                        {validationErrors.login && <Text style={{ color: 'red' }}>{validationErrors.login}</Text>}

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
                                setFormData({...formData, password: value });
                                setValidationErrors({ ...validationErrors, password: 'Заповніть поле' });
                            }}
                            value={formData.password}
                        />
                        {validationErrors.password && <Text style={{ color: 'red' }}>{validationErrors.password}</Text>}

                        <ShowPasswordReg onPress={handleShowPassword}>{passwordShow === false ? 'Показати' : 'Сховати'}</ShowPasswordReg>
                <SubmitButton title='Зареєстуватися' onPress={handleSubmit}></SubmitButton>
                    </View>
                    <LinkWrapper>
                    <Paragraph>Вже є акаунт?{' '}</Paragraph>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <NavigationLog_Reg>Увійти</NavigationLog_Reg>
                        </TouchableOpacity>
                        </LinkWrapper>
                </LoginWrapper>
                </TouchableWithoutFeedback>
        </ScrollView>
        </BGImg>
    )
}

export default RegistrationScreen; 