/**
 * @format
 */

import { AppRegistry, YellowBox } from "react-native";
import {YellowBox} from 'react-native'
import App from "./App";
import { name as appName } from "./app.json";

YellowBox.ignoreWarnings(['Setting a timer for']); 
// console.ignoredYellowBox = ['Setting a timer']; // Ignore Firebase timer issues.

AppRegistry.registerComponent(appName, () => App);
