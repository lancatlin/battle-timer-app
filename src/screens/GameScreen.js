import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Context } from '../context/GameContext'

const GameScreen = () => {
  const { state } = useContext(Context)
  console.log(state)
  return (
    <SafeAreaView>
      <Text h1>Game</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default GameScreen