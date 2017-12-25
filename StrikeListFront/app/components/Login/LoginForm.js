import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor = '#7f8c8d'
                />
                <TextInput
                    placeholder={'username'}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor = 'rgba(255,255,255,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                style={styles.input}>
                    
                </TextInput>
                <TextInput
                    placeholder={'password'}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor = 'rgba(255,255,255,0.7)'
                    secureTextEntry={true}
                    returnKeyType="go"
                    style={styles.input}
                ref={(input) => this.passwordInput = input}>

                </TextInput>
                
                <TouchableOpacity
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        width: 300,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#ecf0f1',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#34495e',
        width: 300,
        borderRadius: 20,
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontWeight: '700',
        
    }
});