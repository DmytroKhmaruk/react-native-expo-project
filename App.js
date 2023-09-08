import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import { Keyboard, TouchableWithoutFeedback, SafeAreaView, View} from "react-native";
import { useFonts } from 'expo-font'
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "react-native-toast-notifications";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import Home from './src/Screens/Home/Home';



const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  
  if (!fontsLoaded) {
		return null;
	}

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <StatusBar style='auto'/>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              </Stack.Navigator>
              </NavigationContainer>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
    </ToastProvider>
  );
};

export default App;
