import { createAppContainer, createStackNavigator, createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Text } from "react-native";
import { Icon } from 'react-native-elements'

import MainPage from "./src/pages/MainPage.js";
import CartPage from "./src/pages/CartPage";
import LoginPage from "./src/pages/LoginPage.js";
import SignUpPage from "./src/pages/SignUpPage.js";
import SignOutPage from "./src/pages/SignOutPage.js";
import DetailsPage from "./src/pages/DetailsPage.js";

import { firebaseAuth } from './src/utils/firebase.js';

console.disableYellowBox = true;

const MainStack = createStackNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      title: "Produtos",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "red",
        borderBottomWidth: 1,
        borderBottomColor: "red"
      },
    }
  },
  Details: {
    screen: DetailsPage,
    navigationOptions: {
        title: "Detalhes",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "red",
          borderBottomWidth: 1,
          borderBottomColor: "red"
        }
    }
  }
});

const CartStack = createStackNavigator({
  Cart: {
    screen: CartPage,
    navigationOptions: {
      title: "Carrinho",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "red",
        borderBottomWidth: 1,
        borderBottomColor: "red"
      }
  }
  }
});

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpPage,
    navigationOptions: {
      header: null
    }
  },
  SignOut: {
    screen: SignOutPage
  }
});

const AppNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Produtos",
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon
              name='home'
              color={tintColor}
              type='font-awesome' />
          ),
          tabBarLabel: ({ focused, tintColor }) => (<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}>Produtos</Text>)
        };
      }
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        title: "Carrinho",
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon
            name='shopping-cart'
            color={tintColor}
            type='font-awesome' />
        ),
        tabBarLabel: ({ focused, tintColor }) => (<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}>Carrinho</Text>),
      }
    },
    Login: {
      screen: LoginStack,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarVisible: false,
          title: "Sair",
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon
              name='sign-out'
              color={tintColor}
              type='font-awesome' />
          ),
          tabBarLabel: ({ focused, tintColor }) => (<Text style={{ color: tintColor, fontSize: 12, textAlign: 'center' }}>Sair</Text>),
          tabBarOnPress: ({ scene, jumpToIndex }) => {
            firebaseAuth.signOut();
          }
        };
      }
    },
  },
  {
    initialRouteName: firebaseAuth.currentUser ? "Login" : "Main",
    tabBarOptions: {
      tintColor: 'red',
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
