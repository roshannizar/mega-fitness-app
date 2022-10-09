/* eslint-disable prettier/prettier */
/* eslint-disable jest/require-hook */
import { AppRegistry, Platform } from 'react-native';
import { name as appName } from './app.json';
import { registerRootComponent } from 'expo';
import App from './src/App';


    registerRootComponent(App);

    AppRegistry.registerComponent('main', () => App);
