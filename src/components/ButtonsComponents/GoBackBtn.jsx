
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


const GoBackBtn = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.goBack();
    };

    return (
        <Pressable onPress={onPress}>
            <MaterialIcons name='arrow-back' size={24} style={{left: 16}} />
        </Pressable>
    )
}

export default GoBackBtn;