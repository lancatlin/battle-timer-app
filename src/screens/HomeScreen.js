import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, ThemeProvider, Text, Input } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return <SafeAreaView style={styles.container}>
    <Text h1>Home</Text>
    <Input label="Players" />
    <Input label="Total Time" />
    <Input label="Final Time" />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 20,
  }
})

export default HomeScreen