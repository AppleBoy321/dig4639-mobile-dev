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
        <Button style={styles.button} color="#990000" title="Click Me" onPress={
          (evt) => this.onPressHandler(evt)}></Button>
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
});