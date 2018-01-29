import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';


const styles = StyleSheet.create({
  logo: {
    height: 80
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#222',
    padding: 20,
    width: '100%'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  intro: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  code: {
    fontFamily: 'monospace, monospace'
  },
  text: {
    borderColor: 'black',
    borderWidth: '1px',
    borderStyle: 'solid'
  },
  googleButton: {
    marginTop: '200px',
    width: '80%',
    color: 'white',
    backgroundColor: '#de4931',
    height: '50px',
    borderRadius: '3px',
    boxShadow: '1px 1px 0px 0px #c5c0c0',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'monospace, monospace'
  },
  
});


class App extends Component {
  
  constructor(...args) {
    super(...args);
    
    this.state = {
      page: 'login'
    };
  }
  
  onLogIn() {
    this.setState({
      page: 'home'
    })
  }
  
  createLunch() {
    this.setState({
      page: 'create'
    });
  }
  
  renderLoginPage() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Lunch</Text>
        </View>
        <TouchableOpacity onPress={this.onLogIn.bind(this)} style={styles.googleButton} >
          <Text>Log in With Google</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderHomePage() {
    
    let buttonStyles = {
      backgroundColor: '#2196f3'
    };
      
    return (
      <View style={{display: 'flex', alignItems: 'center'}}>
        <TouchableOpacity onPress={this.createLunch.bind(this)} style={[styles.googleButton, buttonStyles]} >
          <Text>Create a Lunch</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  renderCreatePage() {
    return (
      <View>
        <Text>Give your lunch group a name!</Text>
      </View>
    );
  }
  
  render() {
    
    if(this.state.page === 'login') {
      return this.renderLoginPage();
    } else if(this.state.page === 'home') {
      return this.renderHomePage();      
    } else if(this.state.page === 'create') {
      return this.renderCreatePage();
    }
  }
}

export default App;