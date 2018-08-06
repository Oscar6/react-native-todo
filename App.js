// import info
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

// create info
class App extends React.Component {
  state = {
    text: "",
    todo: []
  }

  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }

  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style={styles.uiStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}> ToDo App </Text>
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
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  uiStyle: {
    backgroundColor: "#FAFAFA",
    flex: 1
  },
  viewStyle: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: 300,
    height: 40,
    backgroundColor: "white",
    borderColor: "#212121",
    borderWidth: 1
  },
  header: {
    fontSize: 30,
    color: '#212121',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 23,
    color: "#DD2C00"
  }
}

// export info
export default App;
