import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/GameContext'

const GameScreen = ({ navigation }) => {
  const { state, decreaseTime, next, pause } = useContext(Context)
  const [ intervalId, setIntervalId] = useState(null)
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    if (!state.pausing) {
      setIntervalId(setInterval(() => {
        decreaseTime()
      }, 1000))
    } else {
      setIntervalId(null)
    }
  }, [state.current, state.pausing])

  const player = state.players[state.current]
  const BottomButton = () => (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => {
        clearInterval(intervalId)
        navigation.navigate("Home")
      }}>
        <AntDesign name="back" size={40} color="white" />
      </TouchableOpacity>
    </View>
  )
  if (player.lose) {
    return (
      <SafeAreaView style={{ ...styles.container, backgroundColor: player.color }}>
        <View style={styles.touch}>
          <Text h1 style={{ color: "white" }}>{player.name}</Text>
          <Text style={styles.loseText}>You Lose</Text>
        </View>
        <BottomButton />
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: player.color }}>
      <Pressable style={styles.touch}
        onPress={state.pausing ? pause: next }
        onLongPress={pause}
      >
        <View style={styles.body}>
          <Text h1 style={{ color: "white" }}>{player.name}</Text>
          {player.time > 0
            ? <Text style={{ ...styles.time }} >{player.time}</Text>
            : <Text style={{ ...styles.finalTime }} >{state.timer}</Text>
          }
        </View>
        {state.pausing
          ? <AntDesign name="pause" size={100} color="white" style={styles.pause} />
          : null
        }
      </Pressable>

      <BottomButton />
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
  },
  finalTime: {
    color: 'black',
    fontSize: 64,
    fontWeight: 'bold',
  },
  pause: {
    position: 'absolute',
    bottom: 20,
  }
})

export default GameScreen