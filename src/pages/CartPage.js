import React from "react";
import { StyleSheet, View, Alert, AsyncStorage } from "react-native";
import { Button, Text, ThemeProvider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Modal from "react-native-modal";


//import Header from '../components/header';
import axios from "axios";
import CartList from "../components/cartlist";

export default class CartPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: [],
            isModalVisible: false
        };

    }

    getCartItems = async () => {
        try {
            const value = await AsyncStorage.getItem('cartItems');
            if (value !== null) {
                items = JSON.parse(value);
                this.setState({ cartItems: items });
            } else {
            }
        } catch (error) {
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

    removeItem = async (item) => {
        newItems = this.state.cartItems.filter(function (value, index, arr) {

            return value.timestamp != item.timestamp;

        });

        if (newItems.length) {
            await AsyncStorage.setItem('cartItems', JSON.stringify(newItems));
        } else {
            await AsyncStorage.removeItem('cartItems');
        }

        this.setState({ cartItems: newItems });
    };

    removeAllItem = async (item) => {
        newItems = [];

        await AsyncStorage.removeItem('cartItems');

        this.setState({ cartItems: newItems, isModalVisible: true });
    };

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            payload => {
                this.forceUpdate();
            }
        );
    }

    render() {
        this.getCartItems();
        return (
            <View>
                <Modal
          style={styles.bottommodal}
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['up', 'left', 'right', 'down']}>
          <View style={styles.modal}>
            <Text style={styles.contentTitle}>Compra Finalizada</Text>
          </View>
        </Modal>
                <CartList
                    cartItems={this.state.cartItems}
                    removeItem={this.removeItem}
                />
                <View style={styles.horizontal}>
                    <Button buttonStyle={styles.endButton}
                        onPress={this.removeAllItem}
                        title={'Finalizar Pedido'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: "blue"
    },
    horizontal: {
        flex: 0,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    endButton: {
        width: 200,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: 'red'
    },modal: {
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