import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Titulo = ({ children }) => {
    return(
        <Text style= { styles.tituloSeccion } > { children } </Text>
    )
}

export default Titulo;

const styles = StyleSheet.create({
    tituloSeccion: {
        fontSize: 30,
        fontWeight: "600",
        color: "#0F172A",
        padding: 0,
        margin: 0,
        border: 0,
        width: 250,
        justifyContent: 'flex-start',
    },
})