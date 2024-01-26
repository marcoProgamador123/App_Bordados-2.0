import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return ( 
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
  );
}
