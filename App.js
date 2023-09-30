import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './navigation/drawerNavigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

