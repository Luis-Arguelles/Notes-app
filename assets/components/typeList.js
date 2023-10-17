import { StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import {useState} from 'react'

const typeList = () => {

  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{backgroundColor: 'white', borderColor: '#03fce3',}}

    />
  )
}


export default typeList