import React from 'react'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Routes from './components/Routes'

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return <Routes />
}
