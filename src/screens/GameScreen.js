import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/GameContext'

const GameScreen = () => {
  const { state } = useContext(Context)
  console.log(state)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.body}>
          <Text h1>Player 1</Text>
          <Text h1>00:30</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <AntDesign name="left" size={30} color="black" />
        <FontAwesome name="stop" size={30} color="black" />
        <AntDesign name="right" size={30} color="black" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    justifyContent: 'center',
    flex: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
})

export default GameScreen