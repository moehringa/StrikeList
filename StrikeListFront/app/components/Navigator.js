import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ArmyDetails from './ArmyDetails';
import Login from './Login/Login';
import SignUp from './Login/SignUp';

const Navigator = StackNavigator ({
    
   Home: {screen: SignUp},
    Army: {screen: ArmyDetails},
    }, 
    {
        initialRouteName: 'Home',
        headerMode: 'null',
});

export default Navigator;