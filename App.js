import React from 'react';
import {View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import AboutUs from './src/screens/AboutUs';
import Profile from './src/screens/Profile';
import DashBoard from './src/screens/DashBoard';
import CuciKendaraan from './src/screens/CuciKendaraan';
import Setting from './src/screens/Setting';
import Feedback from './src/screens/Feedback';
import Riwayat from './src/screens/Riwayat';
import Pembayaran from './src/screens/Pembayaran';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CuciKendaraan"
          component={CuciKendaraan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Riwayat"
          component={Riwayat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pembayaran"
          component={Pembayaran}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
