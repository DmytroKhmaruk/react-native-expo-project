import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { InputContainer, Input } from "./StyledCommentsScreen";
import ArrowUpBtn from "../../components/ButtonsComponents/ArrowUpBtn";
import Container from "../../components/ContainerComponent/Container";

const CommentsScreen = () => {
    const toast = useToast();
    const [message, setMessage] = useState('');

    const handleChange = (text) => {
        setMessage(text);
    };

    const submitMessage = () => {
        if (!message) {
            toast.show('Ви не можене відправити пусте повідомлення', {
                type: 'warning',
            });
            return;
        }
        console.log(message);
        setMessage('');
    };

    return (
        <Container>
            <InputContainer>
                <Input
                    onChangeText={handleChange}
                    placeholder="Коментувати..."
                    placeholderTextColor='#BDBDBD'
                    value={message}
                />
                <ArrowUpBtn onPress={() => submitMessage()} />
            </InputContainer>
        </Container>
    )
}

export default CommentsScreen;