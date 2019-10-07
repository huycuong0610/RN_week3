import React from 'react'
import { View, Text, Image } from 'react-native'

const ChoiceArea = (props) => {
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceCardTitle}>{props.playerName}</Text>
      <Image source={{uri: props.choice.uri}} style={styles.choiceImage}/>
      <Text style={styles.choiceDescription}>{props.choice.name}</Text>
    </View>
  )
}

const styles = {
  choiceContainer: {
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
}

export default ChoiceArea
