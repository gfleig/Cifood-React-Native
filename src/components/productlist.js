import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ProductListItem from "./productlistitem";

const ProductList = props => {
  const { products, onPressItem } = props;
  const items = products.map(product => (
    <ProductListItem
      key={product.name}
      product={product}
      navigateToProductDetails={onPressItem}
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

export default ProductList;
