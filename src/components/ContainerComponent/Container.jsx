import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet } from "react-native"

const Container = ({ children, keyboardOffset, style}) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={[styles.container, style]}
            >
                {children}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    }
})

export default Container;