import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {content: "Hello World"}
    // console.log("Hello World!!!")
  } 

  onPressHandler(evt) {
    console.log("Clicked!!")
    this.setState({content: "Hello Glorious React Native World!"})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.state.content}</Text>
<<<<<<< HEAD
        <Button style={styles.button} color="#990000" title="Click Me" onPress={
          (evt) => this.onPressHandler(evt)}></Button>
=======
        <Button style={styles.button} color="#990000" title="Click Me" onPress={(evt) => this.onPressHandler(evt)}></Button>
>>>>>>> f9342ce584bfe62e6cd3bf5909924b06d4bdd276
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22
  },
  button: {

  }
<<<<<<< HEAD
});
=======
});
>>>>>>> f9342ce584bfe62e6cd3bf5909924b06d4bdd276
