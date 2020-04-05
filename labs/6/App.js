import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import questions from './questions.json'

const start_page = 0
const question_page = 1

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentState: start_page,
      currentQuestion: 0,
      score: 0
    }
  }

  nextQuestion (x) {
    if (x.correct) {
      this.setState({ score: this.state.score + 1 })
    }
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  render () {
    return (
      <Card containerStyle={styles.container}>
        {(this.state.currentState === start_page) ? 

          <>
            <Text style={styles.header}>Trivia Quiz</Text>
            <Button
              title="Begin Quiz" 
              buttonStyle={styles.button} 
              onPress={ () => this.setState({ currentState: question_page })}
            />
          </>

          : (this.state.currentQuestion < questions.length) ? 
            <>
              <Text style={styles.question}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onPress={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>

          : 
            
            <>
              <Text style={styles.question}>Quiz Finished</Text>
              <Text style={styles.score}>Your Score: {this.state.score}/{questions.length}</Text>
              <Button title="Start Over" buttonStyle={styles.button} onPress={() => this.setState({ currentState: start_page, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    width: 300,
    textAlign: "center",
    marginTop: 150,
    borderRadius: 33,
    borderWidth: 3,
    borderColor: "deepskyblue",
    shadowColor: "gray",
    backgroundColor: "lightgray"
  },

  header: {
    fontSize: 40,
    fontWeight: '700',
    padding: 20,
    fontFamily: "Helvetica",
    textAlign: "center",
    color: "white"
  },

  button: {
    backgroundColor: "deepskyblue",
    margin: 10,
    borderRadius: 12,
    shadowColor: "gray"
  },

  question: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    color: "white"
  },

  score: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  }
})