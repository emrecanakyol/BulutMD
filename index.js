/**
 * @format
 */

//Paketin stabil çalışması için index.js'e eklenmiştir.
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
