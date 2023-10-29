import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';

const typeList = () => {

  const [selected, setSelected] = useState("");
  const [placeholder, setPlaceholder] = useState("Search");
  
  const data = [
      {key:'1', value:'Book'},
      {key:'2', value:'Article'},
      {key:'3', value:'Magazine'},
      {key:'4', value:'Journal'},
      {key:'5', value:'Refelction'},
      {key:'6', value:'Poetry/Rhymes'},
      {key:'7', value:'Other'},
  ]

  return(
      
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data}
        save="value"
        placeholder={placeholder}
        boxStyles={{backgroundColor: 'black', borderColor: '#03fce3', borderWidth: 0.5, width: 200, margin: 5, paddingLeft: 10, borderRadius: 8}}
        dropdownStyles={{borderColor: '#03fce3', borderWidth: 0.5}}
        inputStyles={{color: '#c2c2c2', left: 10}}
        searchicon={<Feather name='search' color={'#c2c2c2'} size={15} style={{left: 0}}/>}
        arrowicon={<SimpleLineIcons name='arrow-down' color={'#c2c2c2'} size={15} style={{alignSelf: 'center'}}/>}
        closeicon={<Ionicons name='close-outline' color={'#c2c2c2'} size={20}/>}
        dropdownTextStyles={{color: 'white'}}
        searchPlaceholder=''
    />

  )
}


export default typeList