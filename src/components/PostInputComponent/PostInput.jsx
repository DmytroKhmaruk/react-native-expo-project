import { TextInput, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PostInput =
    ({icon, onChangeText, style, value, ...otherProps}) => {
        return (
            <View style={[styles.container, style]}>
                <MaterialIcons style={styles.icon} name={icon} size={24} color='#BDBDBD' />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    {...otherProps}
                >
                    {value}
                </TextInput>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        width: '100%',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
    },
    
    input: {
        color: '#212121',
        fontSize: 16,
    },

    icon: {
        marginRight:4,
    }
})
    
export default PostInput;