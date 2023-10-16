import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';

export default function MainButton (props){

    return(
        <TouchableOpacity style = {styles.button}>
        <Text>{props.text}</Text>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        backgroundColor: '#03fce3',
        padding: 10,
        borderRadius: 10
      }
})