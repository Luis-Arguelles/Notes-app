import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import MainStack from './navigation/screens/mainStack'
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  NavigationBar.setBackgroundColorAsync("black");
  return ( 
      <MainStack/>
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
