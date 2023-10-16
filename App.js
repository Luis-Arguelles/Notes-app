import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import MainStack from './navigation/screens/mainStack'

export default function App() {
  return ( 
    <MainStack></MainStack>
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
