import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/GameContext'

const GameScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const [ player, setPlayer ] = useState(0)
  console.log(state)
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.touch}
        onPress={() => setPlayer((player+1) % state.players.length)}
      >
        <View style={styles.body}>
          <Text h1 style={{ color: state.players[player].color }}>Player {player+1}</Text>
          <Text h1>00:30</Text>
        </View>
      </Pressable>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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