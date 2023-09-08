import { ImageBackground, StyleSheet, View } from "react-native";

const ImgBackground = ({ source }) => {
    return (
        <View style={styles.imgContainer}>
            <ImageBackground
                source={source}
                resizeMode="cover"
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        width: '100%',
        height: 240,
        borderRadius: 8,
        overflow: 'hidden',
    },
    
    image: {
        flex: 1,
    },
});

export default ImgBackground;