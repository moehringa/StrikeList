import React from 'react';
import {ScrollView, Text} from 'react-native';

const ArmyDetails = ({ navigation }) => (
    <ScrollView>
        <Text> 
            Soon this will be filled with fantastic {navigation.state.params.name} data! 
        </Text>
    </ScrollView>
);

export default ArmyDetails;