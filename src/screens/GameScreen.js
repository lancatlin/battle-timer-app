import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/GameContext'

const GameScreen = ({ navigation }) => {
  const { state, decreaseTime, next } = useContext(Context)
  const [ intervalId, setIntervalId] = useState(null)
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    setIntervalId(setInterval(() => {
      decreaseTime()
    }, 1000))
  }, [state.current])
  const player = state.players[state.current]
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: player.color }}>
      <Pressable style={styles.touch}
        onPress={player.lose ? null : next}
      >
        <View style={styles.body}>
          <Text h1 style={{ color: "white" }}>{ player.name }</Text>
          { !player.lose
            ? <Text style={styles.time} >{ player.time }</Text>
            : <Text style={styles.loseText}>You Lose</Text>
          }
        </View>
      </Pressable>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => {
          clearInterval(intervalId)
          navigation.navigate("Home")
        }}>
          <AntDesign name="back" size={40} color="white" />
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  loseText: {
    color: 'red',
    fontSize: 48,
  },
  time: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
  }
})

export default GameScreen