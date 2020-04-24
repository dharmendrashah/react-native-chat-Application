/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//console.disableYellowBox = false; //disabl the yellow box console on device
AppRegistry.registerComponent(appName, () => App);
