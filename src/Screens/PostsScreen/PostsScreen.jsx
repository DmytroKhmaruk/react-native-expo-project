import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Container } from './StyledPostsScreen';
import ImageCard from '../../components/ImageCardComponent/ImageCard';

const PostsScreen = () => {
    const navigation = useNavigation();

    const handleComentPress = () => {
        navigation.navigate('Home', {
            screen: 'Comments',
        });
    };

    // const {
    //     params: {
    //     uri = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Freact-native-hw2-3598c69f-9a21-4eb8-9478-64f2505b01ab/ImagePicker/80ee1f7f-6ad6-4b7c-8688-49e5f9d3389b.jpeg",
    //     login = 'Dmytro Khmaruk',
    //     email = 'dmytro@khmaruk.com',
        
    //     },
    // } = useRoute();
    
    return (
        <Container>
            <UserInfo 
            // login={login} email={email} uri={uri}
            />
            <ImageCard onPress={() => handleComentPress()}/>
        </Container>
    )
}

export default PostsScreen;