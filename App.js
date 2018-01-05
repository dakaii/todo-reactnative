import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class App extends React.Component {
  state = {
    text: "",
    todo: []
  }

  addTodo = () =>{
    var arr = this.state.todo
    arr.push(this.state.text);
    this.setState({todo: arr, text: ""})
  }

  deleteTodo = (index) => {
    var arr = this.state.todo;
    arr.splice(index, 1);
    this.setState({todo: arr});
  }

  renderTodos = () => {
    return this.state.todo.map((value, index) => {
      return (
        <Text
          key={index}
          onPress={() => {this.deleteTodo(index)}}>
          {value}
        </Text>
      )
    })
  }

  render() {
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Todo App</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Add Todo"
          color="green"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  inputStyle: {
    height: 40,
    alignSelf: "stretch",
    borderColor: "green",
    borderWidth: 1
  },
  title: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  }
}

export default App;
