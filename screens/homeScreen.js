import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderButtons from '../sections/headerButtons';
import Titulo from '../assets/components/titulo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderButtons />
      <Titulo textPosition="center" > ToDo List </Titulo>
      <Text>HomeScreen!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
