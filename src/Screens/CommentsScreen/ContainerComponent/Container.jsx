import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { ContainerScreen } from "./StyledContainer"

const Container = ({ children, keyboardOffset,}) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerScreen>
                {children}
            </ContainerScreen>
        </TouchableWithoutFeedback>
    )
}

export default Container;