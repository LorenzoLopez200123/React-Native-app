import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity as Button,
  Image,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

const BottomTabs = createBottomTabNavigator()

export default function Home({ navigation }) {
  return (
    <BottomTabs.Navigator
      initialRouteName={'Presentation'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name='Presentation'
        component={Presentation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Text style={{ color: focused ? 'black' : 'gray' }}>HOME</Text>
              </View>
            )
          },
        }}
      ></BottomTabs.Screen>
      <BottomTabs.Screen
        name='Info'
        component={Info}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Text style={{ color: focused ? 'black' : 'gray' }}>INFO</Text>
              </View>
            )
          },
        }}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  )
}

const Info = () => {
  return (
    <View>
      <Text>Info</Text>
    </View>
  )
}

const Presentation = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}> Welcome to my App </Text>
        <Button
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Bread')}
        >
          <Text style={styles.button}>Lets go!</Text>
        </Button>
        <Button
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.button}>Go to Cart!</Text>
        </Button>
        <StatusBar style='light' />
        <Image
          source={{ uri: 'https://picsum.photos/seed/picsum/600' }}
          style={styles.image}
        ></Image>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.image}
        ></Image>
        <Image
          source={{ uri: 'https://picsum.photos/500' }}
          style={styles.image}
        ></Image>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingVertical: 128,
    elevation: 20,
    shadowColor: '#52006A',
  },
  button: {
    color: 'white',
    fontSize: 24,
  },
  buttonContainer: {
    backgroundColor: 'violet',
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  text: {
    margin: 'auto',
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    marginTop: 16,
    width: 300,
    height: 300,
    zIndex: 2,
    borderRadius: 15,
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    padding: 5,
    opacity: 0.9,
  },
})
