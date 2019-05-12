import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (

    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>

);

const style = StyleSheet.create ( {

    container: {    
        marginTop: 0,
        padding: 10,
        backgroundColor: '#4688f4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    }
})


export default Header;
