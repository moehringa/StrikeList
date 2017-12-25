import React from 'react';
import{
    Dimensions, ImageBackground, StyleSheet,
    ScrollView, Text, TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

const hq = require('../images/Primaris-1.jpg');
const troops = require('../images/deathguard-1.jpg');
const elites = require('../images/necron-1.jpg');
const fastAttack = require('../images/eldar-1.jpg');
const heavySupport = require('../images/tau-1.jpg');
const flyers = require('../images/tau-1.jpg');

const styles = StyleSheet.create({
    image: {
        width,
        height: Math.floor(height * 0.3),
        justifyContent: 'flex-end',
    },
    title: {
        color: 'white',
        fontSize: 30,
        padding: 5,
        backgroundColor: 'transparent',
    },
});

const imageAndText = (imageSource, text, navigation) => (
    <TouchableOpacity onPress = {() => navigation.navigate('Detachment', {name: text})}>
        <ImageBackground source = {imageSource} style = {styles.image}>
            <Text style = {styles.title}>
                {text}
            </Text>
        </ImageBackground>
    </TouchableOpacity>
);

const MainDetList = ({navigation}) => (
    <ScrollView>
        {imageAndText(space_marine, 'Space Marines', navigation)}
        {imageAndText(deathguard, 'Deathguard', navigation)}
        {imageAndText(tau, 'Tau', navigation)}
        {imageAndText(eldar, 'Eldar', navigation)}
        {imageAndText(necron, 'Necron', navigation)}
        {imageAndText(necron, 'Necron', navigation)}
    </ScrollView>
);

export default MainDetList;