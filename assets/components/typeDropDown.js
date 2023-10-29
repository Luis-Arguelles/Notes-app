import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: "Book", value: "Book"},
  { label: "Article", value: "Article"},
  { label: "Magazine", value: "Magazine"},
  { label: 'Journal', value: 'Journal' },
  { label: 'Reflection', value: 'Reflection' },
  { label: 'Poetry/Rhymes', value: 'Poetry/Rhymes' },
  { label: 'Other', value: 'Other' }
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={{color: '#c2c2c2'}}
        inputSearchStyle={{color: 'white'}}
        itemTextStyle={{color: 'white'}}
        containerStyle={{backgroundColor: 'black', borderRadius: 10, borderColor: '#03fce3'}}
        selectedTextStyle={{color: 'white'}}
        activeColor='#171717'
        iconColor='gray'
        data={data}
        search
        labelField="label"
        valueField="value"
        onFocus={
          () => {
            setIsFocus(true);
          } 
        }
        placeholder={!isFocus ? 'Select type of note' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}

      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({

  dropdown: {
    height: 40,
    width: 200,
    borderColor: '#03fce3',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
    margin: 5
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});