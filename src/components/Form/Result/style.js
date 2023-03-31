import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    resultadoImc: {
        marginBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },

    imc: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultado: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corPesoBaixo: {
        backgroundColor: '#FFFF00',
    },
    
    corPesoNormal: {
        backgroundColor: '#008000',
    },
    
    corSobrepeso: {
        backgroundColor: '#fa7f72',
    },
    
    corObesidade: {
        backgroundColor: '#FFA500',
    },
    
    corObesidadeSevera: {
        backgroundColor: '#FF6347',
    },

    corObesidadeMorbida: {
        backgroundColor: '#FF0000',
    },

});

export default styles