import {  StackNavigator } from 'react-navigation';
import MainScreen from '../components/mainScreen';
import LoginScreen from '../components/loginScreen';

export const Root = StackNavigator({
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
});
  