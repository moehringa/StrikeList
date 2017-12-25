import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import SignUpForm from './SignUpForm';

export default class SignUp extends Component {
    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/Primaris-1.jpg')} />
                    <Text style={styles.title}>
                        An app for list building.
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <SignUpForm/>
                </View>
                <View style={styles.signInTextCont}>
                    <Text style={styles.signInText}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.signInButton}>
                            Sign in.
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95a5a6',
        alignItems: 'center',
        justifyContent:'center',
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    logo: {
        width: 200,
        height: 100,
        alignItems: 'center',
    },
    title: {
        color: '#ecf0f1',
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        opacity: 0.9,
    },
    signInTextCont: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        justifyContent: 'flex-end'
    },
    signInText: {
        color: '#ecf0f1',
        paddingHorizontal: 5,
    },
    signInButton: {
        color: '#34495e',
        fontWeight: '500',
    }
});