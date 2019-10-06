/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Todolist from './src/Todolist';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Todolist);
