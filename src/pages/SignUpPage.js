import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

import { firebaseAuth } from '../utils/firebase.js';

export default class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            user: null
        };
    }

    onLogin() {
        this.props.navigation.navigate('Login');
    }

    onSignUp() {
        const { email, password } = this.state;

        try {
            firebaseAuth.createUserWithEmailAndPassword(email, password);
            Alert.alert('Account created')
        } catch (error) {
            Alert.alert(error.toString(error));
        }
    }

    render() {
        return (
            <View style={styles.container}>
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

                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Confirmar Senha'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <View style={{ paddingVertical: 8 }}>
                    <Button
                        title={'Cadastrar'}
                        color='red'
                        onPress={this.onSignUp.bind(this)}
                    />
                </View>
                <Button
                    title={'Login'}
                    color='gray'
                    onPress={this.onLogin.bind(this)}
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
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    }
});