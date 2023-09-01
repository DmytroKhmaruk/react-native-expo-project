
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


const LogoutBtn = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Login')
    }

    return (
        <Pressable onPress={onPress}>
            <MaterialIcons name='logout' size={24} color='#BDBDBD' style={{right: 16}} />
        </Pressable>
    )
}

export default LogoutBtn;