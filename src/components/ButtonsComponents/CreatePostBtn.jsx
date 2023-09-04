import { Pressable, StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CreatePostBtn = ({ text, onPress, style }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{
                backgroundColor: pressed ? "#FF6C00" : "#F6F6F6",
                transform: pressed ? 'scale(0.95)' : 'scale(1)',
            },
            styles.btn,
            ]} 
        >
            {({ pressed }) => (
                <Text style={[{
                    color: pressed ? '#FFFFFF' : '#BDBDBD',
                },
                styles.btnText, style]}
                >
                    {pressed ? 'Опубліковано' : text}
                </Text>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 28,
        marginBottom: 16,
        padding: 16,
        width: '100%',
        alightItems: 'center',
        borderRadius: 100,
    },
    btnText: {
        fontSize: 16,
        textAlign: 'center',
    }
})

export default CreatePostBtn;