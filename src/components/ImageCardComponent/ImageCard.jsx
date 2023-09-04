
import { TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Image, ImgTitle, InfoContainer, InfoWrapper, ComentsTitle, LocationTitle } from "./StyledImageCard";

const ImageCard = ({onPress}) => {
    return (
        <Container>
            <Image 
                source={require('../../img/Ліс.png')} 
            />
            <ImgTitle>Ліс</ImgTitle>
            <InfoContainer>
                <TouchableWithoutFeedback onPress={onPress}>
                    <InfoWrapper>
                        <MaterialIcons name='mode-comment' size={24} color='#BDBDBD' />
                        <ComentsTitle>0</ComentsTitle>
                    </InfoWrapper>
                </TouchableWithoutFeedback>
                    <InfoWrapper>
                        <MaterialIcons name='place' size={24} color='#BDBDBD' />
                        <LocationTitle>Ivano-Frankivs'k Region, Ukraine</LocationTitle>
                    </InfoWrapper>
            </InfoContainer>
        </Container>
    )
}

export default ImageCard;
