import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';



const CreateEvento = ({ navigation }) => {

    const handleMap = () => {
        navigation.navigate("Map");
    };


    return (
        <View style={styles.containerEventos}>

            <View>
                <Text style={styles.containerEventosTexto} >Tipos de Eventos</Text>
            </View>

            <View style={styles.containerEventosTipos}>
                <Text style={styles.containerEventosTiposTexto1}>Coleta seletiva</Text>
                <Text style={styles.containerEventosTiposTexto}>Limpeza na praça</Text>
            </View>

            <View style={styles.containerEventosTipos} >
                <Text style={styles.containerEventosTiposTexto}>Palestra de conscientização</Text>
                <Text style={styles.containerEventosTiposTexto}>Limpeza na praça</Text>
            </View>


            <View>
                <Text style={styles.containerEventosTexto}>Local</Text>

                <View style={styles.containerEventosLocal}>
                    <TouchableOpacity onPress={handleMap}>
                        <Text>Local do evento</Text>
                    </TouchableOpacity>
                </View>

            </View>


            <Text style={styles.containerEventosTexto}> Horário</Text>
            <View style={styles.containerEventosHorario}>
                <View style={styles.containerEventosHorarios}>
                </View>
                <View style={styles.containerEventosHorarios}>
                </View>

            </View>

            <View>
                <Text style={styles.containerEventosTexto}>Descrição</Text>

                <View style={styles.containerEventosDescricao}>
                    <Text style={styles.containerEventosDescricaoTexto} >Descrição do evento</Text>
                </View>
            </View>

            <View style={styles.containerEventosCriarBotton}>

                <Text style={styles.containerEventosCriarBottonTexto}>Criar Eventos</Text>

            </View>


        </View>
    );
};
const styles = StyleSheet.create({
    containerEventos: {
        marginTop: '30%',
        maxWidth: '90%',
        marginHorizontal: '5%',

    },
    containerEventosTexto: {
        fontSize: 20,
        marginBottom: 10,
    },

    containerEventosTipos: {
        flexDirection: 'row',
    },

    containerEventosTiposTexto: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 10,
    },
    containerEventosTiposTexto1: {
        padding: 10,
        backgroundColor: '#317F54',
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 10,
        color: 'white',
    },
    containerEventosLocal: {
        borderWidth: 1,
        borderRadius: 10,
        width: "90%",
        padding: 30,
        marginBottom: 10,
    },

    containerEventosHorario: {
        flexDirection: 'row',
    },
    containerEventosHorarios: {
        borderWidth: 1,
        borderRadius: 10,
        width: "10%",
        padding: 30,
        marginBottom: 10,
        marginRight: 10
    },

    containerEventosDescricao: {
        borderWidth: 1,
        borderRadius: 10,
        width: "90%",
        padding: 30,
        marginBottom: 10,
    },
    containerEventosDescricaoTexto: {
        marginBottom: 20,
    },


    containerEventosCriarBotton: {
        padding: 15,
        backgroundColor: '#317F54',
        width: '90%',
        marginTop: 10,
        borderRadius: 20,
    },

    containerEventosCriarBottonTexto: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }

});

export default CreateEvento;