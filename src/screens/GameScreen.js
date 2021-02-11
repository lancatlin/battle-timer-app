import React, { useContext, useState, useEffect, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/GameContext'

const GameScreen = ({ navigation }) => {
  const { state, decreaseTime } = useContext(Context)
  const [ p, setPlayer ] = useState(0)
  const [ intervalId, setIntervalId] = useState(null)

  const reducer = (finalTime, action) => {
    switch (action) {
      case 'reset':
        return state.finalTime
      case 'decrease':
        return finalTime - 1
      default:
        return finalTime
    }
  } 

  const [ finalTime, dispatch ] = useReducer(reducer, state.finalTime)
  const player = state.players[p]
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId)
      dispatch('reset')
    }
    setIntervalId(setInterval(() => {
      if (player.time > 0)  {
        decreaseTime(p)
      } else {
        console.log(finalTime)
        dispatch('decrease')
      }
    }, 1000))
  }, [p, player.time > 0])
  return (
    <SafeAreaView style={styles.container}>
      {
        player.time > 0 || finalTime > 0
          ? <Pressable style={styles.touch}
            onPress={() => setPlayer((p + 1) % state.players.length)}
          >
            <View style={styles.body}>
              <Text h1 style={{ color: player.color }}>Player {p + 1}</Text>
              <Text h1
                style={{ color: player.time > 0 ? 'black' : 'gray' }}
              >{player.time > 0 ? player.time : finalTime}</Text>
            </View>
          </Pressable>
          : <View style={styles.touch}>
            <Text h1 style={{ color: player.color }}>Player {p + 1}</Text>
            <Text h1 style={styles.loseText}>You Lose</Text>
          </View>
      }
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
  },
})

export default GameScreen