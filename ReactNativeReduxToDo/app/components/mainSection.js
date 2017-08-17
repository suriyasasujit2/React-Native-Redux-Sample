import React, {Component} from 'react';
import {
    StyleSheet, 
    Button, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class MainSection extends Component {

    onPressGoToTodo() {
        console.log('onPressGoToTodo pressed!!')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                   Hello World !! 
                </Text>
                <Text style={styles.instructions}>
                    To Do Item !!
                </Text>
                <Button
                    onPress={this.onPressGoToTodo}
                    title="Go To Todo"
                    color="#841584"
                    accessibilityLabel="Go To Todo Component"
                />
            </View>
        );
    }
}
