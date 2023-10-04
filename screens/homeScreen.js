import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderButtons from '../sections/headerButtons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderButtons />
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
