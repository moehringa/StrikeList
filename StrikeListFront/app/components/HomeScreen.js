import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArmyList from './ArmyList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


const HomeScreen = ({ navigation }) => (
    <View style = {styles.container}>
        <ArmyList navigation = {navigation}/>
    </View>
);

export default HomeScreen;