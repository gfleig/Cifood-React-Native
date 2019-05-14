import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import CartListItem from "./cartlistitem";

const CartList = props => {
  const { cartItems, removeItem } = props;

  const items = cartItems.map(cartItem => (
    <CartListItem
      key={cartItem.timestamp}
      cartItem={cartItem}
      removeItem={removeItem}
    />
  ));
  return <ScrollView style={styles.container}>
    {items}
  </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    backgroundColor: "#e2f9ff"
  }
});

export default CartList;
