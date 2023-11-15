import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tutorial from './src/pages/Tutorial';
import Perfil from './src/pages/Perfil';
import Home from './src/pages/Home';
import Login from './src/pages/Login'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

function App() {
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
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};


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
