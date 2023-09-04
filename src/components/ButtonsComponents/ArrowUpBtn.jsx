
import { MaterialIcons } from "@expo/vector-icons";
import { PressableBG } from "./StyledButton";
import { Pressable, StyleSheet } from "react-native";


const ArrowUpBtn = ({onPress}) => {
        const styles = StyleSheet.create({
    arrowUpBtn: {
    width: 34,
    height: 34,
    borderRadius: 20,
            backgroundColor: "#FF6C00",
            justifyContent: 'center',
            alignItems: 'center',
            },
        });
    
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => [
                {
                    transform: pressed ? 'scale(0.95)' : 'scale(1)',
                },
                styles.arrowUpBtn,
            ]}>
            <MaterialIcons name='arrow-upward' size={16} color='#FFFFFF'/>
        </Pressable>
    )
}

export default ArrowUpBtn;