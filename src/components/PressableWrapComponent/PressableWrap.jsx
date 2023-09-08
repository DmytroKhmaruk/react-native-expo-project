import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const PressableWrap = ({iconName, onPress, style}) => {
    return (
        <Pressable onPress={onPress} style={style}>
            {({ pressed }) => (
                <MaterialIcons name={iconName} size={24}
                    style={[{ color: pressed ? '#FF6C00' : '#BDBDBD' }]}
                />
            )}
        </Pressable>
    )
}

export default PressableWrap