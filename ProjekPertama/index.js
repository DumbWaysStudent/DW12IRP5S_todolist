/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Todolist from './src/Todolist';
import AddTodo from './src/AddTodo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AddTodo);
