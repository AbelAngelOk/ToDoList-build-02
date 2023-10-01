import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Subtitulo = ({ children }) => {
    return( <Text style= { styles.subtitulo } > { children } </Text> )
}

export default Subtitulo;

const styles = StyleSheet.create({
    subtitulo: {
        fontSize: 20,
        fontWeight: "600",
        color: "#1E293B",
        width: 250,
    },
})