import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, StyleSheet, View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

const GameScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: "pink" }}>
      <Pressable style={styles.touch}
      >
        <View style={styles.body}>
          <Text h1 style={{ color: "white" }}>Player Name</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
            }}
          >03:10</Text>
        </View>
      </Pressable>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => {
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
  },
})

export default GameScreen