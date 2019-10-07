import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import PlayButtons from './components/PlayButtons'
import ChoiceArea from './components/ChoiceArea';
import { randomComputerChoice, getRoundOutcome } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: 'Pick your choice'
    }
  }

  onChoiceButtonPress = (choice) => {
    const userChoice = CHOICES.find((item) => item.name === choice)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    this.setState({ userChoice, computerChoice, result })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header result={this.state.result}/>
        </View>

        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <View style={styles.choiceContainer}>
              <ChoiceArea
                playerName="You"
                choice={this.state.userChoice}
              />
            </View>
            <Text>VS</Text>
            <View style={styles.choiceContainer}>
              <ChoiceArea
                playerName="Computer"
                choice={this.state.computerChoice}
              />
            </View>
          </View>
        </View>

        <View style={styles.choiceButtons}>
          <View style={styles.choiceContainer}>
            <PlayButtons onButtonPress={this.onChoiceButtonPress}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.15,
    backgroundColor: 'red',
  },
  playArea: {
    flex: 0.55,
    backgroundColor: 'green',
  },
  choiceButtons: {
    flex: 0.3,
    backgroundColor: 'blue',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
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
});
