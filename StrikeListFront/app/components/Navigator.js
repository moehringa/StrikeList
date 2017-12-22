import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ArmyDetails from './ArmyDetails';

const Navigator = StackNavigator ({
   Home: {
       screen: HomeScreen,
   },
   Army: {screen: ArmyDetails, 
            },
}, {
   initialRouteName: 'Home',
    headerMode: 'screen',
});

export default Navigator;