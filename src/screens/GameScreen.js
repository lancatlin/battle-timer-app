import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import useTimer from '../helper/useTimer'

const GameScreen = ({ navigation }) => {
  const [player, finalTime, next, stop] = useTimer()
  return (
    <SafeAreaView style={styles.container}>
      {
        player.time > 0 || finalTime > 0
          ? <Pressable style={styles.touch}
            onPress={next}
          >
            <View style={styles.body}>
              <Text h1 style={{ color: player.color }}>{ player.name }</Text>
              <Text h1
                style={{ color: player.time > 0 ? 'black' : 'gray' }}
              >{player.time > 0 ? player.time : finalTime}</Text>
            </View>
          </Pressable>
          : <View style={styles.touch}>
            <Text h1 style={{ color: player.color }}>{ player.name }</Text>
            <Text h1 style={styles.loseText}>You Lose</Text>
          </View>
      }
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => {
          stop()
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