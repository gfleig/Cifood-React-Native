import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

import { firebaseAuth } from '../utils/firebase.js';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            user: null
        };
    }


    onLogin() {
        const { email, password } = this.state;

        try {
            firebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
                console.log('bad password');
            });
        } catch (error) {
            console.log('error');
            // Alert.alert(error.toString(error));
        }
    }

    onSignUp() {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/cifood.png' )}
                    style={{ width: 200, height: 115,  marginBottom: 20}}
                />
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Email'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <View style={{ paddingVertical: 8 }}>
                    <Button
                        title={'Login'}
                        color='red'
                        onPress={this.onLogin.bind(this)}
                    />
                </View>

                <Button
                    title={'Cadastrar'}
                    color='gray'
                    onPress={this.onSignUp.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    loginInput: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'red',
        marginBottom: 10,
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    signUpInput: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});