import { StyleSheet, View, TouchableOpacity } from 'react-native';
import IconButton from '../assets/components/iconButton';

export default function HeaderButtons() {
  return (
    <View style={styles.boxButtons}>
        <IconButton 
            OnPress={ () => {} }
            IconName="settings-sharp"
            IconProvider="Ionicons"
        />
        <IconButton 
            OnPress={ () => {} }
            IconName="list"
            IconProvider="Entypo"
            IconSize="40"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    boxButtons: {
        flex: 0.11,
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:20
      },
});
