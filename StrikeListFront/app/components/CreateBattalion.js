import React, { Component } from 'react';
import { Dimensions,  StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

export default class CreateBattalion extends Component {

    render() {
        
        
        return (
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.imageL}
                        source={require('../images/hq_left.png')} />
                    <Image
                    style={styles.imageR}
                    source={require('../images/hq_right.png')} />
                </View>
        );
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95a5a6',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3498db',
        padding: 5,
        
    },
    title: {
        color: '#ecf0f1',
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        opacity: 0.9,
    },
    imageL: {
        width: Math.floor(width * 0.2),
        height: Math.floor(height * 0.05),
    },
    imageR: {
        width: Math.floor(width * .07),
        height: Math.floor(height * .05),
        marginRight: 10,
    },
});