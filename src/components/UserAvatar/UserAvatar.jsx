import * as ImagePicker from 'expo-image-picker'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { ImgWrapper, PlusIconWrapper } from './StyledUserAvatar';
import { MaterialIcons } from "@expo/vector-icons";

const UserAvatar = ({setImage, image}) => {
    const deleteImage = () => {
        setImage(null);
    };
    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log('URI обраної фотографії:', result.assets[0].uri);
        }
    };

    return (
            <ImgWrapper>
                <ImageBackground
                    source={{ uri: image }}
                    resizeMode='cover'
                    style={{ width: '100%', height: '100%' }}
                />
                <PlusIconWrapper>
                    <TouchableOpacity onPress={image ? deleteImage : addImage}>
                        <MaterialIcons
                            name={image ? "cancel" : "control-point"}
                            color={image ? "#E8E8E8" : "#FF6C00"}
                            size={25}    />
                    </TouchableOpacity>
                </PlusIconWrapper>
            </ImgWrapper>

    )
}

export default UserAvatar;