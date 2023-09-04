import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import MainScreen from './src/Screens/Home/Home';
import { ToastProvider } from "react-native-toast-notifications";


const Stack = createStackNavigator();

const App = () => {
  return (
    <ToastProvider
      placement="top"
      duration={2500}
      animationType="slide-in"
      animationDuration={550}
      warningColor="#FF6C00"
      textStyle={{ fontSize: 20 }}
      offset={200}
      swipeEnabled={true}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
