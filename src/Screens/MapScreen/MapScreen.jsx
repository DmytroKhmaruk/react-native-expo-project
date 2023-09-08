import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Container from "../../components/ContainerComponent/Container";
import { useRoute } from "@react-navigation/native";

const MapScreen = ({ route }) => {
    const { latitude, longitude, place } = route.params;
    return (
        <Container style={{alignItems: 'center'}}>
            <MapView
                style={styles.mapStyle}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType='standard'
                minZoomLevel={15}
            >
                <Marker
                    title={place}
                    cordinate={{ latitude, longitude }}
                />
            </MapView>
        </Container>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen;