import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet, Image, View } from 'react-native';
import ConfigElement from '../assets/components/configElement';
import LargeButton from '../assets/components/largeButton';
import Titulo from '../assets/components/titulo';
import Parrafo from '../assets/components/parrafo';
import Subtitulo from '../assets/components/subtitulo';

const MenuItems = ({ navigation }) => {

    return (
        <DrawerContentScrollView style= { styles.container }>
            <View style= { styles.perfilContainer }>
                <Titulo>Perfil</Titulo>
                <View style= { styles.perfil }>
                    <Image 
                        source= {{ uri:"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600" }} 
                        style= { styles.perfil_imagen } 
                    />
                    <Parrafo>Usuario Parrafo</Parrafo>
                </View>
                <View style= { styles.ingreso }>
                    <LargeButton>Cambiar Lista de Tareas</LargeButton>
                    <LargeButton>Cerrar sesion</LargeButton>
                </View>
            </View>
            <View style= { styles.configContainer }>
                <Subtitulo>Personalizacion</Subtitulo>
                <ConfigElement name={ "Historial" } />
                <ConfigElement name={ "Eliminacion de tarea" } />
                <ConfigElement name={ "Rechazar tarea" } />
                <ConfigElement name={ "Repeticion de tarea" } />
                <ConfigElement name={ "Edicion de tarea" } />
                <ConfigElement name={ "Ver detalles" } />
                <ConfigElement name={ "Fechas limite" } />
            </View>
        </DrawerContentScrollView>
    )
}

export default MenuItems;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#E2E8F0",
        flex: 1
    },
    perfilContainer: {
        padding: 15
    },
    perfil: {
        fontSize: 30,
        fontWeight: "600",
        color: "#0F172A",
        width: 250,
        height: 100,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 15
    },
    perfil_imagen: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    ingreso: {
        width: "100%",
        height: 130,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    configContainer: {
        backgroundColor: "#F1F5F9",
        padding: 15,
        height: 500
    },

})