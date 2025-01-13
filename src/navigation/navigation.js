import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Loading from '../screens/Initialise/Loading';
import {HOME, LOADING, PROPERTY_DETAILS} from '../constants/screenNames';
import PropertyDetails from '../screens/PropertyDetails/PropertyDetails';
import Home from '../screens/Home/Home';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={LOADING}
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={PROPERTY_DETAILS}
          component={PropertyDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: Platform.OS == 'ios' ? false : true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
