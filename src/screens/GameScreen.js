import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/GameContext'

const GameScreen = ({ navigation }) => {
  const { state, decreaseTime } = useContext(Context)
  const [ p, setPlayer ] = useState(0)
  const [ intervalId, setIntervalId] = useState(null)
  const player = state.players[p]
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    setIntervalId(setInterval(() => {
      decreaseTime(p)
    }, 1000))
  }, [p])
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.touch}
        onPress={() => setPlayer((p+1) % state.players.length)}
      >
        <View style={styles.body}>
          <Text h1 style={{ color: player.color }}>Player {p+1}</Text>
          <Text h1>{ player.time }</Text>
        </View>
      </Pressable>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => {
          clearInterval(intervalId)
          navigation.navigate("Home")
        }}>
          <AntDesign name="back" size={40} color="black" />
        </TouchableOpacity>
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