import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity as Button,
  TextInput,
} from 'react-native'

const initialState = [
  {
    id: 1,
    name: 'ir a comprar a las 10am',
  },
]

export default function Dashboard() {
  const [task, setTask] = useState('')
  const [Tasks, setTasks] = useState(initialState)

  const handleTask = (e) => {
    console.log(e)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Ingresá una Tarea</Text>
        <TextInput
          name={'task'}
          onChange={handleTask}
          style={styles.input}
          value={task}
        ></TextInput>
        <Button style={styles.buttonContainer}>
          <Text style={styles.button}>Lets go!</Text>
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'purple',
    height: '100%',
    textAlign: 'center',
    padding: 64,
    elevation: 20,
    shadowColor: '#52006A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 'auto',
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: '100%',
    marginBottom: 16,
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
})
