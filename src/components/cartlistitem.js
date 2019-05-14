import React from "react";
import {
    Alert,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native";

import { Button, Text, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartListItem = props => {
    const { cartItem, removeItem } = props;
    const timestamp = cartItem.timestamp;
    const name = cartItem.name;
    const quantity = cartItem.quantity;
    const price = cartItem.price;

    return (
        <TouchableHighlight
            underlayColor="red"
        >
            <View key={timestamp} style={styles.container}>
                <Text style={styles.nameText}>
                    {quantity + 'x ' + jsCapitalize(name)}
                </Text>
                <Text style={styles.priceText}>
                    {"R$ " + (quantity * price).toFixed(2)}
                </Text>
                <Button
                buttonStyle={styles.removeButton}
                onPress={() => {removeItem(cartItem)}}
                icon={
                  <Icon
                    name="trash"
                    size={25}
                    color={"red" }
                  />
                }
              />
            </View>
        </TouchableHighlight>
    );
};

function jsCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        backgroundColor: "white"
    },
    vertical: {
        flexDirection: "column"
    },

    nameText: {
        fontSize: 18,
        textAlign: "left",
        textAlignVertical: "center",
        //paddingTop: 15,
        paddingLeft: 10,
    },

    descriptionText: {
        fontSize: 18,
        textAlign: "left",
        textAlignVertical: "center",
        //paddingTop: 15,
        paddingLeft: 0,
        color: "gray"
    },

    priceText: {
        fontSize: 18,
        textAlign: "right",
        textAlignVertical: "center",
        //paddingTop: 15,
        paddingLeft: 0,
        color: "black"
    },

    profileThumb: {
        width: 80,
        height: 80,
        margin: 6,
        marginHorizontal: 12,
        borderRadius: 24
    },
    removeButton: {
        backgroundColor: "white"
    }
});

export default CartListItem;
