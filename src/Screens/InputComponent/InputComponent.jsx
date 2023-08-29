import { InputWrapper, StyledInput } from './StyledInputComponent'
import { useState } from "react";

const Input = ({ customStyle, placeholder, onFocus, onBlur, type, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

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
                secureTextEntry={type === 'password' && true}
            >   
            </StyledInput>
        </InputWrapper>
    )
}

export default Input;