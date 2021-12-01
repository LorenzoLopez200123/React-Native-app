import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import CartStack from '../screens/CartStack'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'transparent',
            elevation: 0,
            borderBottomWidth: 0,
          },
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Bread' component={Dashboard} />
        <Stack.Screen name='Cart' component={CartStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
