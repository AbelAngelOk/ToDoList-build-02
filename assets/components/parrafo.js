import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Parrafo = ({ children }) => { 
    return( <Text style= { styles.perfil_nombre } > { children } </Text> )
}

export default Parrafo;

const styles = StyleSheet.create({
    perfil_nombre: {
        width: 200,
        height: 25,
        color: "#0F172A",
    },
})