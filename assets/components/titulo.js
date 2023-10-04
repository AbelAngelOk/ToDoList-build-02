import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Titulo = ({ textPosition, children }) => {

    const textPositionDefault = "left";

    return(
        <Text style= {[ styles.tituloSeccion, { textAlign: textPosition || textPositionDefault } ]} > { children } </Text>
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
        width: "100%",
    },
})