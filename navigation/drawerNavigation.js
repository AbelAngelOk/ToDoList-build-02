import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/homeScreen";
import SettingsScreen from "../screens/settingsScreen";
import MenuItems from './menuItems';

const Drawer = createDrawerNavigator();

export function MyDrawer () {
    return(
        <Drawer.Navigator
            drawerContent={ (props) => <MenuItems { ...props } />}
        >
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

