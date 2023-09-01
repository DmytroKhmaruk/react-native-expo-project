import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import LogoutBtn from "../../components/ButtonsComponents/LogoutBtn";
import GoBackBtn from "../../components/ButtonsComponents/GoBackBtn";

const Tab = createBottomTabNavigator();

const Home = () => {
    const styles = StyleSheet.create({
  addWrapper: {
    width: 70,
    height: 40,
    borderRadius: 20,
            backgroundColor: "#FF6C00",
            justifyContent: 'center',
            alignItems: 'center',
  },
});
    return (
        <Tab.Navigator
            initialRouteName="Posts"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 83,
                    borderTopColor: "#BDBDBD",
                    borderTopWidth: 1,
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Posts') {
                        iconName = 'grid-view';
                    } else if (route.name === 'CreatePosts') {
                        return (
                            <View style={styles.addWrapper}>
                                <MaterialIcons name='add' size={size} color='#ffffff' />
                            </View>
                        );
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    }

                    return <MaterialIcons name={iconName} size={size} />
                },

                headerStyle: {
                    borderBottomColor: "#BDBDBD",
                    borderBottomWidth: 1,
                },

                headerTitleAlign: "center",
                tabBarLabel: () => null,
            })}
        >
            <Tab.Screen
                name='Posts'
                component={PostsScreen}
                options={{
                    title: 'Публікації',
                    headerRight: () => <LogoutBtn />,
                }}
            />
            <Tab.Screen
                name='CreatePosts'
                component={CreatePostsScreen}
                options={{
                    title: 'Створити Публікацію',
                    tabBarStyle: { display: 'none' },
                    headerLeft: () => <GoBackBtn />,
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: 'Коментарі',
                    tabBarStyle: { display: 'none' },
                    headerLeft: () => <GoBackBtn />,
                }}
            />

        </Tab.Navigator>
    );


};

export default Home;