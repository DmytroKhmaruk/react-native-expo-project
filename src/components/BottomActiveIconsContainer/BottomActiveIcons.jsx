import { View, StyleSheet } from "react-native";

const BottomActiveIcons = ({ children, focused, style }) => {

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 23,
            paddingVertical: 8,
            borderRadius: 20,
        },
    });
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: focused ? color = '#FF6C00' : color= '#FFFFFF'},
                style,
            ]}>
            {children}
        </View>
        
    )
}

export default BottomActiveIcons;