import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import Tutorial from './src/pages/Tutorial';
import Perfil from './src/pages/Perfil';
import Map from './src/pages/Map.js';
import Login from './src/pages/Login'
import eventos from './src/pages/eventos.js';
import CreateAccount from './src/pages/CreateAccount.js'
import CreateEvento from './src/pages/CreateEvento.js'
import { FontFamily } from "./GlobalStyle.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');


function App() {

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tutorial">
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{
            title: 'Tutorial Screen',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerShown: false
          }}
        />
         <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerTitle: "",
            headerShown: true,
            headerTransparent: true,
            headerBlurEffect: "light",
            headerTintColor: "#317F54",
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: FontFamily.poppinsMedium,
            },
          }}
        />
       <Stack.Screen
          name="Eventos"
          component={eventos}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CreateEvento"
          component={CreateEvento}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}







// const Tabs = () => {

//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="CreateEvento"
//         component={CreateEvento}
//         options={{
//           headerShown: false,
//           tabBarLabel: "CreateEvento",
//         }}
//       />
//        <Tab.Screen
//         name="Eventos"
//         component={eventos}
//         options={{
//           headerShown: false,
//           tabBarLabel: "Eventos",
//         }}
//       />
//       <Tab.Screen
//         name="Perfil"
//         component={Perfil}
//         options={{
//           headerShown: false,
//           tabBarLabel: "Perfil",
//         }}
//       />
//     </Tab.Navigator>
//   );
// };


// const CustomTabBar = ({ state, descriptors, navigation, userType }) => {
//   const [tabBarHeight, setTabBarHeight] = useState(83);
//   const [iconSize, setIconSize] = useState(24);
//   const isIOS = Platform.OS === 'ios';

//   useEffect(() => {
//     const screenHeight = Dimensions.get('window').height;
//     const calculatedHeight = screenHeight * 0.085;
//     setTabBarHeight(calculatedHeight);

//     const iconWidth = Dimensions.get('window').width;
//     const calculatedIconSize = iconWidth * 0.05;
//     setIconSize(calculatedIconSize);
//   }, []);

//   return (
//     <Tab.Navigator tabBar={props => <CustomTabBar {...props} userType={userType} />}>
//       <Tab.Screen
//         name="Perfil"
//         component={Perfil}
//         options={{
//           headerShown: false,
//           tabBarLabel: "Perfil",
//         }}
//       />

//     </Tab.Navigator>
//   );
// };

export default App;
