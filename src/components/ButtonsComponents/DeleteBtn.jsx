import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Pressable } from "react-native";

const DeleteBtn = ({ onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{
                    backgroundColor: pressed ? '#FF6C00' : '#F6F6F6',
                    transform: pressed ? 'scale(0.95)' : 'scale(1)',
            },
            styles.btn,
            ]}
        >
            {({ pressed }) => (
                <MaterialIcons name='delete-outline' size={24}
                    style={[{color: pressed ? '#FFFFFF' :'#BDBDBD'}]}
                />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 23,
        paddingVertical: 8,
        width: 70,
        alignSelf: 'center',
        borderRadius: 20,
    },
});

export default DeleteBtn;