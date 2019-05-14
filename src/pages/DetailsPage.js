import React from "react";
import { View, Image, StyleSheet, AsyncStorage } from "react-native";
import { Button, Text, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

export default class DetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      isModalVisible: false
    };

  }

  addQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  subQuantity = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  addToCart = async (name, quantity, price) => {
    cartItem = {
      "timestamp": Math.floor(Date.now()),
      "name": name,
      "quantity": quantity,
      "price": price
    }

    try {
      const value = await AsyncStorage.getItem('cartItems');
      if (value !== null) {
        console.log('has');
        // We have data!!
        items = JSON.parse(value)
        items.push(cartItem)
        await AsyncStorage.setItem('cartItems', JSON.stringify(items));
      } else {
        console.log('hasn');
        await AsyncStorage.setItem('cartItems', JSON.stringify([cartItem]));
      }
    } catch (error) {
      console.log('error');
      // Error retrieving data
    }

    this.setState({ isModalVisible: true });
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('products', 'Nada').name;
    const description = navigation.getParam('products', 'Nada').description;
    const seller = navigation.getParam('products', 'Nada').seller;
    const price = navigation.getParam('products', 'Nada').price;
    const image = navigation.getParam('products', 'Nada').image;

    return (
      <ThemeProvider>
        <Modal
          style={styles.bottommodal}
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['up', 'left', 'right', 'down']}>
          <View style={styles.modal}>
            <Text style={styles.contentTitle}>Produto Adicionado</Text>
          </View>
        </Modal>
        <View>
          <View key={name} style={styles.line}>
            <Image
              source={{ uri: image }}
              style={styles.profileThumb}
            />
            <View key={name} style={styles.vertical}>
              <Text style={styles.nameText}>
                {jsCapitalize(name)}
              </Text>
              <Text style={styles.descriptionText}>
                {jsCapitalize(description)}
              </Text>
              <Text style={styles.priceText}>
                {"R$ " + price}
              </Text>
            </View>
          </View>
          <View style={styles.horizontal}>
            <View key={name} style={styles.buttons}>
              <Button
                buttonStyle={styles.amountButton}
                onPress={this.subQuantity.bind(this)}
                disabled={this.state.quantity == 1}
                icon={
                  <Icon
                    name="minus"
                    size={25}
                    color={this.state.quantity == 1 ? "gray" : "red"}
                  />
                }
              />
              <Text style={styles.amountText}>
                {this.state.quantity}
              </Text>
              <Button
                buttonStyle={styles.amountButton}
                onPress={this.addQuantity.bind(this)}
                icon={
                  <Icon
                    name="plus"
                    size={25}
                    color="red"
                  />
                }
              />
            </View>
            <Button
              textStyle={styles.addButtonText}
              price={price}
              onPress={this.addToCart.bind(this, name, this.state.quantity, price)}
              buttonStyle={styles.addButton}
              title={'Adicionar R$' + (this.state.quantity * price).toFixed(2)} />
          </View>
        </View>
      </ThemeProvider>


    );
  }

}

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    backgroundColor: "white"
  },
  buttons: {
    flexDirection: "row",
    borderWidth: 1,
    width: 114,
    height: 40,
    marginTop: 5,
    marginHorizontal: 5,
    borderBottomColor: "gray",
    backgroundColor: "white"
  },
  addButton: {
    width: 180,
    height: 40,
    marginTop: 5,
    marginHorizontal: 5,
    textAlignVertical: "center",
    backgroundColor: "red"
  },
  addButtonText: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  amountButton: {
    backgroundColor: 'white',
    height: 38
  },
  vertical: {
    flexDirection: "column"
  },
  horizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  nameText: {
    width: 225,
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    //paddingTop: 15,
    paddingLeft: 0,
  },

  descriptionText: {
    fontSize: 16,
    width: 225,
    // height: 85,
    textAlign: "left",
    textAlignVertical: "top",
    //paddingTop: 15,
    paddingLeft: 0,
    color: "gray"
  },

  priceText: {
    fontSize: 18,
    textAlign: "left",
    textAlignVertical: "bottom",
    //paddingTop: 15,
    paddingLeft: 0,
    color: "red"
  },
  amountText: {
    fontSize: 30,
    width: 40,
    textAlign: "center",
    textAlignVertical: "center",
    //paddingTop: 15,
    paddingLeft: 0,
    color: "gray"
  },

  profileThumb: {
    width: 120,
    height: 120,
    margin: 6,
    marginHorizontal: 12,
    borderRadius: 24
  },
  modal: {
    backgroundColor: 'red',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }, bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  }, contentTitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 12,
},
});

function jsCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}