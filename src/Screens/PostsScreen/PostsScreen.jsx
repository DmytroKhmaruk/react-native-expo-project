import { FlatList, StyleSheet } from 'react-native';
import { useRoute, route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';
import ImageCard from '../../components/ImageCardComponent/ImageCard';
import Container from '../../components/ContainerComponent/Container';
import PostsSeparator from '../../components/PostsSeparatorComponent/PostsSeparator';

const userInit = {
    email: 'dmytro@gmail.com',
    login: 'Dmytro Khmaruk',
    avatar: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
};

const postsInit = [
    {
        image:
            "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
        title: "Wonderful picture",
        place: "Ivano-Frankivs'k Region, Ukraine",
        coords: { latitude: 48.64673964273703, longitude: 24.349936255514663 },
	
    },
];


const PostsScreen = ({ navigation, route }) => {
    const [posts, setPosts] = useState(postsInit);
    const [user, setUser] = useState(userInit);

    useEffect(() => {
        if (route.params.state?.image) {
            setPosts((prevState) => [...prevState, route.params.state]);
        }
    }, [route.params.state?.image]);

     useEffect(() => {
         if (route.params.email) {
             setUser({
                 email: route.params.email,
                 login: route.params.login,
                 avatar: route.params.avatar,
             });
        }
     }, [route.params.email]);
    
    // const navigation = useNavigation();

    const handleComentPress = () => {
        navigation.navigate('Home', {
            screen: 'Comments',
        });
    };

    const handleLocationPress = ({ latitude, longitude }, place ) => {
        navigation.navigate('Home', {
            screen: 'Map',
            params: {
                place,
                latitude,
                longitude,
            },
        });
    };
    
    return (
        <Container style={{ gap: 32}}>
            <UserInfo 
            login={user.login} email={user.email} uri={user.avatar}
            />
            {/* <ImageCard onPress={() => handleComentPress()}/> */}
            <FlatList
                data={posts}
                keyExtractor={(_, id) => {
                    return id.toString();
                }}
                ItemSeparatorComponent={() => <PostsSeparator />}
                renderItem={({ item }) => {
                    return (
                        <ImageCard
                            image={item.image}
                            title={item.title}
                            place={item.place}
                            onCommentPress={() => handleComentPress()}
                            onLocationPress={() => handleLocationPress(item.coords, item.place)}
                        />
                    );
                }}
            />
        </Container>
    )
}

export default PostsScreen;