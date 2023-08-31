import { Text } from 'react-native';
import { InputWrapper, StyledInput } from './StyledInputComponent';
import { useState } from "react";

    const Input = ({ customStyle, placeholder, onFocus, onBlur, type, onValueChange, validationErrors }) => {
        const [isFocused, setIsFocused] = useState(false);

        const handleChange = (text) => {
            if (onValueChange) {
                onValueChange(text)
            }
        };

        const handleFocus = () => {
            setIsFocused(true);
            if (onFocus) {
                onFocus();
            }
        };

        const handleBlur = () => {
            setIsFocused(false);
            if (onBlur) {
                onBlur();
            }
        };

        return (
            <InputWrapper>
                <StyledInput
                    customStyle={customStyle}
                    placeholder={placeholder} 
                    placeholderTextColor='#BDBDBD'
                    isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handleChange}
                    secureTextEntry={type === 'password' && true}
                    validationErrors={validationErrors}
                />   
                {validationErrors && <Text style={{ color: 'red'}}>{validationErrors}</Text>}
            </InputWrapper>
        )
    }

    export default Input;