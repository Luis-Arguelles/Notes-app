import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import MainButton from '../../assets/components/mainButton'
import Input from '../../assets/components/input'
import TypeList from '../../assets/components/typeList'

export default function CreateNoteScreen() {
    return (
      <View style = {styles.container}>
        <StatusBar/>
        <Input placeholder = 'Title'></Input>
        <Input placeholder = 'Note'></Input>
        <TypeList></TypeList>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 25,
    }
   
  });