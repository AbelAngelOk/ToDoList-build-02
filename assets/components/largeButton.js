import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LargeButton = ({ children }) => {
    return(
        <TouchableOpacity style= { styles.buttonContainer }>
            <Text> { children } </Text>
        </TouchableOpacity>
    )
}

export default LargeButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 250,
        height: 50,
        backgroundColor: "#94A3B8",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        color: "#0F172A",
    },
})