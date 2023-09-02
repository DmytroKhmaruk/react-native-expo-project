import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { View, Pressable } from "react-native";
import { useToast } from "react-native-toast-notifications";
import Container from "../CommentsScreen/ContainerComponent/Container";

const initialState = {
    image: null,
    title: '',
    place: '',
};

const CreatePostsScreen = () => {
    const toast = useToast();
    const navigation = useNavigation();
    const [state, setState] = useState(initialState);
    const [isFocused, setIsFocused] = useState(null);
    
    const deleteImage = () => {
        setState((prevState) => ({ ...prevState, image: null }));
    };

    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setState((prevState) => ({ ...prevState, image: result.assets[0].uri }));
        }
    };

    const submit = (data) => {
        const { image, title, place } = state;

        if (!image || !title || !place) {
            toast.show('Будь ласка, заповніть всі поля', {
                type: 'warning',
            });
            return;
        }

        navigation.navigate('Home', {
            screen: 'Profile',
            params: { state },
        });

        console.log('state:', state);
        setIsFocused(null);
        setState(initialState);
    };

    const deletePost = () => {
        setState(initialState);
    };

    return (
        <Container>
            <Pressable></Pressable>
        </Container>
    )
}

export default CreatePostsScreen;