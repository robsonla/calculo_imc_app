import { Text, View } from "react-native";
import styles from "./style";

export default function Result(props){

    let color

    if(props.imc < 18.5){

       color = styles.corPesoBaixo

    }else if(props.imc >= 18.5 && props.imc < 25){
        
        color = styles.corPesoNormal

    }else if(props.imc >= 25 && props.imc < 30){

        color = styles.corSobrepeso

    }else if(props.imc >= 30 && props.imc < 35){

        color = styles.corObesidade

    }else if(props.imc >= 35 && props.imc < 40){

        color = styles.corObesidadeSevera

    }else{

        color = styles.corObesidadeMorbida
    }

    return(

        <View style={styles.resultadoImc}>

            <Text style={styles.info}>Seu IMC foi</Text>

            <Text style={styles.imc}>{props.imc}</Text>

            <Text style={[styles.msgResultado, color]}>{props.msgResultado}</Text>

        </View>
    );
}