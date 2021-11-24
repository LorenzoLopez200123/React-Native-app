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

export default function Home({ navigation }) {
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
})
