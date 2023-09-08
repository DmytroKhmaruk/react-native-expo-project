import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import Container from "../../components/ContainerComponent/Container";
import PostInput from '../../components/PostInputComponent/PostInput';
import CreatePostBtn from "../../components/ButtonsComponents/CreatePostBtn";
import DelereBtn from "../../components/ButtonsComponents/DeleteBtn";
import PressableWrap from "../../components/PressableWrapComponent/PressableWrap";

import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";


const initialState = {
    image: null,
    title: '',
    place: '',
    coords: {},
};

const CreatePostsScreen = () => {
    const toast = useToast();
    const navigation = useNavigation();
    const [state, setState] = useState(initialState);
    const [isFocused, setIsFocused] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            await Location.requestForegroundPermissionsAsync();

            setHasPermission(status === 'granted');

            let location = await Location.getCurrentPositionAsync({});

            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            setState((prevState) => ({ ...prevState, coords }));
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);

            setState((prevState) => ({ ...prevState, image: uri }));
        }
    };

    const changeCamera = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
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
            screen: 'Posts',
            params: { state },
        });

        setIsFocused(null);
        setState(initialState);
    };

    const deletePost = () => {
        setState(initialState);
    };

    return (
        <Container style={{ justifyContent: 'space-between'}}>
            {/* <Pressable onPress={() => addImage()}> */}
            <View>
                <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.imgContainer}>
                    {state.image && (
                        <ImageBackground
                            source={{ uri: state.image }}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%' }}
                        />  
                    )}
                </View>
                    <TouchableOpacity
                        onPress={takePhoto}
                        style={[
                        styles.cameraIconWrap,
                        { backgroundColor: state.image ? '#rgba(255, 255, 255, 0.30)' : '#FFFFFF'}
                ]}>            
                    <MaterialIcons name='photo-camera' size={24}
                        color={state.image ? '#FFFFFF' : '#BDBDBD'}
                        style={styles.cameraIcon}
                    /> 
                </TouchableOpacity>

                </Camera>

                <Text style={styles.loadText}>
                    {state.image ? 'Редагувати фото' : 'Завантажте фото'}
                </Text>
                {state.image && (
                    <PressableWrap
                        iconName='flip-camera-ios'
                        onPress={changeCamera}
                        style={styles.changeCamera}
                    />
                )}

                </View>

                {/* </Pressable> */}
                

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

    // imgContainer: {
    // width: '100%',
    // height: 240,
    // borderRadius: 8,
    // overflow: 'hidden',
    // backgroundColor: '#F6F6F6',
    // },

    camera: {
        aspectRatio: 343 / 240,
    width: '100%',
    // height: 240,
        borderRadius: 8,
    borderWidth: 1,
        overflow: 'hidden',
    borderColor: '#BDBDBD',
    // backgroundColor: '#F6F6F6',
    },

    imgContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    width: 100,
    height: 70,
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
    changeCamera: {
        position: 'absolute',
        bottom: -2,
        right: 0,
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