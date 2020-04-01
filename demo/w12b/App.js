import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TextInput, CheckBox } from 'react-native';

class TodoItem extends React.Component {
  state={}
  render() {
    return <View style={{ flexDirection:'row' }}>
      <CheckBox style={{marginTop:12}} value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}></CheckBox>
    <Text style={{fontSize:30, marginLeft: 10}}>{this.props.content}</Text>
    </View>
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.rows = ['This is 1', 'This is 2', 'This is 3']
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      content: "Hello World",
      dataSource: ds.cloneWithRows(this.rows),
      currentItem: 3,
      todoText: ""
  }
    // console.log("Hello World!!!")
  } 

  onPressHandler(evt) {
    console.log("Clicked!!")
    this.rows = [...this.rows, this.state.todoText]
    console.log(this.state.todoText)
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this.rows)})
  }
  
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Text style={styles.header}>{this.state.content}</Text>
<<<<<<< HEAD
        <Button style={styles.button} color="#990000" title="Click Me" onPress={
          (evt) => this.onPressHandler(evt)}></Button>
=======
        <Button style={styles.button} color="#990000" title="Click Me" onPress={(evt) => this.onPressHandler(evt)}></Button>
>>>>>>> f9342ce584bfe62e6cd3bf5909924b06d4bdd276
=======
        <View style={{flexDirection:'row'}}>
          <TextInput onChangeText={todoText => this.setState({todoText})} ></TextInput>
          <Button style={styles.button} color="#990000" title="Click Me" onPress={(evt) => this.onPressHandler(evt)}></Button>
        </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem content={rowData} />}
      />
>>>>>>> 85308e767b6d679b23adec243374a9d10fde4199
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
