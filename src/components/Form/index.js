import { TextInput, View, Text, TouchableOpacity } from "react-native";
import Result from "./Result";
import styles from "./style";
import { useState } from "react";

export default function Form(){

    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setMsgResultado] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function validacaoImc(){

        if(peso != null && altura != null){

            let pesoFormat = peso.replace("," , ".")
            let alturaFormat = altura.replace("," , ".")

            if(pesoFormat > 0 && alturaFormat > 0){
              
                calcularImc(pesoFormat, alturaFormat)
                setAltura(null)
                setPeso(null)
                setTextButton("Calcular")
                setMsgCalculo(null)

            }else{

                setAltura(null)
                setPeso(null)
                setTextButton("Calcular")
                setMsgCalculo("Valor inválido")
            }

        }else{

            setMsgCalculo("Preencha os campos!")
            setImc(null)
        }
    }

    function calcularImc(pesoFormat, alturaFormat){
        
        let imc = (Number.parseFloat(pesoFormat) 
        / Number.parseFloat(alturaFormat**2))

        setImc(imc.toFixed(2))
        resultado(imc)
    }

    function resultado(imc){
        
        if(imc < 18.5){

            setMsgResultado("Peso baixo")

        }else if(imc >= 18.5 && imc < 25){
            
            setMsgResultado("Peso normal")

        }else if(imc >= 25 && imc < 30){

            setMsgResultado("Sobrepeso")

        }else if(imc >= 30 && imc < 35){

            setMsgResultado("Obesidade (Grau I)")

        }else if(imc >= 35 && imc < 40){

            setMsgResultado("Obesidade severa (Grau II)")

        }else{

            setMsgResultado("Obesidade mórbida (Grau III)")
        }
    }

    return(

         <View style={styles.form}>

            {imc == null ?

                <View>

                    {msgCalculo != null && (

                        <Text style={styles.alerta}>{msgCalculo}</Text>
                    )}

                    <Text style={styles.label}>Informe seu peso</Text>

                    <TextInput 
                        style={styles.input} 
                        keyboardType="numeric" 
                        value={peso}
                        onChangeText={setPeso}
                    />

                    <Text style={styles.label}>Informe sua altura</Text>

                    <TextInput 
                        style={styles.input}
                        keyboardType="numeric" 
                        value={altura}
                        onChangeText={setAltura}
                    />

                    <TouchableOpacity onPress={() => validacaoImc()}>

                        <Text style={styles.buttom}>{textButton}</Text>

                    </TouchableOpacity>

                </View>

                :

                <View>

                    <Result imc={imc} msgResultado={msgResultado}/>

                    <TouchableOpacity onPress={() => validacaoImc()}>

                        <Text style={styles.buttom}>{textButton}</Text>

                    </TouchableOpacity>

                </View>
            }
        </View>
    );
}