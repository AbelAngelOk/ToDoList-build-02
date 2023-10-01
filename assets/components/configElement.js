import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


const ConfigElement = ({ name }) => {
    
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => { 
        setIsEnabled(previusState => !previusState )
    }

    return(
        <View style= { styles.functionContainer} >
            <Text> {name} </Text>
            <Switch 
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{true:'#64748B', false:'grey'}}
                thumbColor={isEnabled? '#475569':'grey'}
            />
        </View>
    )
} 

export default ConfigElement;

const styles = StyleSheet.create({
    functionContainer: {
        height: 50,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})