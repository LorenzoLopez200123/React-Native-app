import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Bread' component={Dashboard} />
        {/* <Stack.Screen page='Detail' component={<Home />}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
