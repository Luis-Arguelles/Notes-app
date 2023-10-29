import {View, Text, TextInput, StyleSheet} from 'react-native'

const input = (props) => {
    return(
    <View>
        <TextInput multiline placeholder={props.placeholder} placeholderTextColor='#c2c2c2' style={styles.input}></TextInput>
    </View>
    )
}


const styles = StyleSheet.create({

    input: {
        backgroundColor: 'black',
        color: 'white',
        width: 200,
        paddingLeft: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#03fce3',
        margin: 5
    }
})

export default input;