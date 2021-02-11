import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../context/GameContext'

const HomeScreen = ({ navigation }) => {
  const [players, setPlayers] = useState('2')
  const [totalTime, setTotalTime] = useState('30')
  const [finalTime, setFinalTime] = useState('10')
  const { createGame } = useContext(Context)

  const startGame = () => {
    createGame(parseInt(players), parseInt(totalTime), parseInt(finalTime))
    navigation.navigate("Game")
  }

  return <SafeAreaView style={styles.container}>
    <Text h1>Home</Text>
    <Input
      label="Players" 
      value={players}
      onChangeText={setPlayers}
      keyboardType="numeric"
    />
    <Input
      label="Total Time" 
      value={totalTime}
      onChangeText={setTotalTime}
      keyboardType="numeric"
    />
    <Input 
      label="Final Time" 
      value={finalTime}
      onChangeText={setFinalTime}
      keyboardType="numeric"
    />
    <Button
      title="Start"
      style={styles.button}
      onPress={startGame}
    />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
  },
})

export default HomeScreen