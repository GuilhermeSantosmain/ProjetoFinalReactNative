import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../helpers/dimensions'
const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        width: "85%",
        marginTop: 10,
        alignSelf: "center"
    },
    picker: {
        minWidth: "80%",
        height: 25
    },

    form: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        width: windowWidth / 1.3,
        minHeight: windowHeight / 1.2,
        padding: 5,
        marginBottom: windowHeight / 30,
        alignSelf: 'center'

    },
    body: {
        flex: 1,
        justifyContent: "center"
    },

    input: {
        borderWidth: 0.5,
        borderColor: "#666",
        borderRadius: 5,
        padding: 6,
        width: '100%',
    },
    inputText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    msgCadastro: {
        marginTop: 20,
        backgroundColor: '#000',
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloBtn: {
        fontSize: 16,
        fontWeight: "500",
        color: '#fff',
    },
    btnDelete: {

        marginTop: 15,
        backgroundColor: '#f00',
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

}




});

export default styles;