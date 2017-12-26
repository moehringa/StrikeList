import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ArmyDetails from './ArmyDetails';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import CreateBattalion from './CreateBattalion'

const Navigator = StackNavigator ({
    
   Home: {screen: CreateBattalion},
    Army: {screen: ArmyDetails},
    }, 
    {
        initialRouteName: 'Home',
        headerMode: 'null',
});

export default Navigator;