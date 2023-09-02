
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


const LogoutBtn = ({style}) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Login')
    }
        
    const styles = StyleSheet.create({
        btn: {
            position: 'absolute',
            top: 22,
            right: 16,
        },
    });
        
    return (
        <Pressable onPress={onPress} style={[styles.btn, style]}>
            <MaterialIcons name='logout' size={24} color='#BDBDBD' />
        </Pressable>
    )
}

export default LogoutBtn;