import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigations/DrawerNavigator";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";



const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <LoginScreen/>
      </NavigationContainer>

    )
  }
}

class StackNav extends React.Component {
  render() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen  name="Dashboard" component={DrawerNavigator} />
        </Stack.Navigator>
    )
  }
}

