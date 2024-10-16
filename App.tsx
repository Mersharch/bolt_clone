/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RidesScreen from './src/screens/RidesScreen';
import AccountScreen from './src/screens/AccountScreen';
import {getScreenHeight, getScreenPercent} from './src/utils/responsive';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: getScreenHeight(50),
              paddingBottom: getScreenPercent(5),
            },
            tabBarActiveTintColor: '#1D3261',
            tabBarInactiveTintColor: '#8E8E93',
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size, focused}) =>
                focused ? (
                  <Fontisto name="home" color={color} size={size} />
                ) : (
                  <SimpleLineIcons name="home" color={color} size={size} />
                ),
            }}
          />
          <Tab.Screen
            name="Rides"
            component={RidesScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size, focused}) => (
                <MaterialCommunityIcons
                  name={focused ? 'calendar-clock' : 'calendar-clock-outline'}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size, focused}) => (
                <FontAwesome
                  name={focused ? 'user-circle' : 'user-circle-o'}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
