import { StyleSheet, Text, View } from "react-native";
import PressableWrap from "../PressableWrapComponent/PressableWrap";
import ImgBackground from "../ImgBackgroundComponent/ImgBackgraund";


const ImageCard = ({
    coords = { latitude: 50, longitude: 50 },
    image = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
    onCommentPress,
    onLocationPress,
    place = "Ivano-Frankivs'k Region, Ukraine",
    title = 'Ліс',
    }) => {
    return (
        <View style={styles.container}>
            <ImgBackground source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoWrap}>
                    <PressableWrap
                        iconName='mode-comment'
                        onPress={onCommentPress}
                    />
                    <Text style={styles.comentsTitle}>0</Text>
                </View>
                <View style={styles.infoWrap}>
                    <PressableWrap
                        iconName='place'
                        onPress={onLocationPress}
                    />
                    <Text style={styles.locationTitle}>
                        {place}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    justifyContent: 'center',
    gap: 8,
    paddingTop: 32,
    },

    title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
    color: '#212121',
    },
    
    infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 24,
    },
    
    infoWrap: {
    flexDirection: 'row',
    gap: 6,
    },
    
    comentsTitle: {
    fontSize: 16,
    color: '#BDBDBD',
    },

    locationTitle: {
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
    },

})

export default ImageCard;

