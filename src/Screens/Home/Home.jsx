import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import BottomActiveIcons from "../../components/BottomActiveIconsContainer/BottomActiveIcons";
import LogoutBtn from "../../components/ButtonsComponents/LogoutBtn";
import GoBackBtn from "../../components/ButtonsComponents/GoBackBtn";
import CommentsScreen from "../CommentsScreen/CommentsScreen";

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="Posts"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 83,
                    borderTopColor: "#BDBDBD",
                    borderTopWidth: 1,
                },

                tabBarIcon: ({ focused }) => {

                    if (route.name === 'Posts') {
                        return (
                            <BottomActiveIcons focused={focused}>
                                <MaterialIcons name='grid-view' size={24}
                                    color={focused ? color = '#ffffff' : color = 'rgba(33, 33, 33, 0.8)'} />
                            </BottomActiveIcons>
                        );

                    } else if (route.name === 'CreatePosts') {
                        return (
                                <MaterialIcons name='add' size={24} color='rgba(33, 33, 33, 0.8)' /> 
                        );
                        
                    } else if (route.name === 'Profile') {
                        return (
                            <BottomActiveIcons focused={focused}>
                                <MaterialIcons name='person-outline' size={24}
                                    color={focused ? color = '#ffffff' : color = 'rgba(33, 33, 33, 0.8)'} />
                            </BottomActiveIcons>
                        );
                    }

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
                    headerRight: () => <LogoutBtn style={{ top: 16 }} />,
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
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='Comments'
                component={CommentsScreen}
                options={{
                    title: 'Коментарі',
                    tabBarItemStyle: {display: 'none'},
                    tabBarStyle: { display: 'none' },
                    headerLeft: () => <GoBackBtn />,
                }}
            />

        </Tab.Navigator>
    );


};

export default Home;