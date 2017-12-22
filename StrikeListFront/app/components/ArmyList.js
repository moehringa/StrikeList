import React from 'react';
import{
    Dimensions, ImageBackground, StyleSheet,
    ScrollView, Text, TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

const space_marine = require('../images/Primaris-1.jpg');
const deathguard = require('../images/deathguard-1.jpg');
const necron = require('../images/necron-1.jpg');
const eldar = require('../images/eldar-1.jpg');
const tau = require('../images/tau-1.jpg');

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
    <TouchableOpacity onPress = {() => navigation.navigate('Army', {name: text})}>
        <ImageBackground source = {imageSource} style = {styles.image}>
            <Text style = {styles.title}>
                {text}
            </Text>
        </ImageBackground>
    </TouchableOpacity>
);

const ArmyList = ({navigation}) => (
    <ScrollView>
        {imageAndText(space_marine, 'Space Marines', navigation)}
        {imageAndText(deathguard, 'Deathguard', navigation)}
        {imageAndText(tau, 'Tau', navigation)}
        {imageAndText(eldar, 'Eldar', navigation)}
        {imageAndText(necron, 'Necron', navigation)}
    </ScrollView>
);

export default ArmyList;