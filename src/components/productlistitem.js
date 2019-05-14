import React from "react";
import {
  Alert,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

import { Button, Text, Card, ListItem, Icon, ThemeProvider } from 'react-native-elements';

const ProductListItem = props => {
  const { product, navigateToProductDetails } = props;
  const name = product.name;
  const image = product.image;
  const description = product.description;
  const seller = product.seller;
  const price = product.price;

  return (
    <TouchableHighlight
      style={styles.card}
      onPress={() => navigateToProductDetails(product)}
      underlayColor="white"
    >
      <Card
        containerStyle={styles.card}
        title={jsCapitalize(name)}
        image={{uri: product.image}}
      >
        <Text style={styles.descriptionText}>
        {jsCapitalize(description)}
        </Text>
        <Text style={styles.priceText}>
        {"R$ " + price}
        </Text>
      </Card>
    </TouchableHighlight>
  );
};

function jsCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    backgroundColor: "white"
  },
  vertical: {
    flexDirection: "column"
  },

  nameText: {
    fontSize: 22,
  },
  card: {
    backgroundColor: "white"
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 5,
    color: "gray"
  },

  priceText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
    color: "red"
  },

  profileThumb: {
    width: 80,
    height: 80,
    margin: 6,
    marginHorizontal: 12,
    borderRadius: 24
  }
});

export default ProductListItem;
