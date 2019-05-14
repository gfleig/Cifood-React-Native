import React from "react";
import { View } from "react-native";

//import Header from '../components/header';
import axios from "axios";
import ProductList from "../components/productlist";
import { firestore, firebaseAuth } from '../utils/firebase.js';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      products: [],
    };

  }

  componentDidMount() {
    try {
      firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          this.props.navigation.navigate('Main');
        } else {
          this.props.navigation.navigate('Login');
        }
      })

      firebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log('bad password');
      });
    } catch (error) {
      console.log('error');
      // Alert.alert(error.toString(error));
    }

    firestore.collection('products').get().then(querySnapshot => {
      products_ = [];
      querySnapshot.forEach(function (doc) {
        products_.push(doc.data());
      });
      this.setState({ products: products_ });
    });
  }

  render() {
    //{this.componentDidMount()}
    return (
      <View>
        <ProductList
          products={this.state.products}
          onPressItem={(products) => {
            this.props.navigation.navigate('Details', {
              products
            });
          }}
        />
      </View>
    );
  }
}
