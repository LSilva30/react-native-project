import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, SafeAreaView, ScrollView, View, ImageBackground } from 'react-native'

import styles from './styles'
import Box from './components/Box'

const image = {uri: 'https://i.pinimg.com/originals/47/5d/a9/475da9942fbe6f210286bab028556713.jpg'}

export default function App() {
  const students = [
    { name: 'Emily', age: 24, city: 'Boca' },
    { name: 'Luiz', age: 25, city: 'Boca' },
    { name: 'Dan', age: 39, city: 'Boca' },
    { name: 'Chris', age: 29, city: 'Boca' },
    { name: 'Matt', age: 19, city: 'Boca' },
    { name: 'Christian', age: 20, city: 'Boca' },
    { name: 'Val', age: 30, city: 'Boca' },
    { name: 'Zack', age: 30, city: 'Boca' },
    { name: 'Noah', age: 17, city: 'Boca' },
    { name: 'Mia', age: 15, city: 'Boca' },
  ]

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.customText}>Hello Class!</Text>
        <StatusBar style='auto' />
          <ImageBackground 
                source={image} 
                resizeMode='cover' 
                style={{ ...styles.container, flex:1 }}
                >
          
          {students.map(student => {
            return (
              <Box entireStudent={student} /> //passing students as entireStudent and turning it into a prop
            )
          })}
          </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  )
}