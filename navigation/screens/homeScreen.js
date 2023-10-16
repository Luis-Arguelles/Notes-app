import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import MainButton from '../../assets/components/mainButton'

export default function HomeScreen() {
    return (
        <View style = {styles.container}>
            <StatusBar/>
            <MainButton text = 'Add note'></MainButton>
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    }
   
  });
