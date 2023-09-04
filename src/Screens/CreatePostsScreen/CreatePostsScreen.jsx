import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { View, Pressable, StyleSheet, ImageBackground, Text } from "react-native";
import { useToast } from "react-native-toast-notifications";
import Container from "../../components/ContainerComponent/Container";
import PostInput from '../../components/PostInputComponent/PostInput';
import { MaterialIcons } from "@expo/vector-icons";
import CreatePostBtn from "../../components/ButtonsComponents/CreatePostBtn";
import DelereBtn from "../../components/ButtonsComponents/DeleteBtn";
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
        <Container style={{ justifyContent: 'space-between'}}>
            <Pressable onPress={() => addImage()}>
                <View style={styles.imgContainer}>
                    {state.image && (
                        <ImageBackground
                            source={{ uri: state.image }}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%' }}
                        />  
                    )}
                </View>
                <View style={[
                    styles.cameraIconWrap,
                    { backgroundColor: state.image ? '#rgba(255, 255, 255, 0.30)' : '#FFFFFF'}
                ]}>            
                    <MaterialIcons name='photo-camera' size={24}
                        color={state.image ? '#FFFFFF' : '#BDBDBD'}
                        style={styles.cameraIcon}
                    /> 
                </View>

                <Text style={styles.loadText}>
                    {state.image ? 'Редагувати фото' : 'Завантажте фото'}
                </Text>
            </Pressable>

            <PostInput
                icon='create'
                onChangeText={(text) =>
                    setState((prevState) => ({ ...prevState, title: text }))
                }
                onFocus={() => setIsFocused('title')}
                placeholder='Назва...'
                placeholderTextColor='#BDBDBD'
                value={state.title}
                style={isFocused === 'title' ? { borderBottomColor: '#FF6C00' } : null}
                
            />
            <PostInput
                icon='place'
                onChangeText={(text) =>
                    setState((prevState) => ({ ...prevState, title: text }))
                }
                onFocus={() => setIsFocused('place')}
                placeholder='Місцевість...'
                placeholderTextColor='#BDBDBD'
                value={state.place}
                style={isFocused === 'place' ? { borderBottomColor: '#FF6C00' } : null}
            />
            <CreatePostBtn text='Опублікувати' onPress={submit} />
            
            <DelereBtn onPress={deletePost} />
        </Container>
    )
}

const styles = StyleSheet.create({
    imgInputContainer: {
        gap:8,
    },

    imgContainer: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
    },

    cameraIconWrap: {
    position: 'absolute',
    top: 90,
    left: '50%',
    transform: [{ translateX: -30}],

    width: 60,
    height: 60,
    borderRadius: 30,
    },
    cameraIcon: {
        position: 'absolute',
        top: 18,
        left: 18,
    },
    deleteIcon: {
        position: 'absolute',
        bottom: 6,
        right: 6,
    },
    loadText: {
        fontSize: 16,
        color: '#BDBDBD',
    },
    title: {
        fontSize: 16,
        color: '#212121',
    },
})

export default CreatePostsScreen;