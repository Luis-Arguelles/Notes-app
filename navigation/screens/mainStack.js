import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './homeScreen'
import CreateNoteScreen from './createNoteScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
  
const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route })=> ({

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconNameHome;
            let iconNameCreateNote;

            if (route.name === 'Home') {
              iconNameHome = focused
                ? 'home': 'home';
            } else if (route.name === 'CreateNote') {
              iconNameCreateNote = focused ? 'add-circle': 'add-circle-outline';
            }

            // You can return any component that you like here!
            return (
            <View>
              <Feather name={iconNameHome} size={size} color={color} />
              <Ionicons name={iconNameCreateNote} size={size} color={color} />
            </View>
          )
          },
          //tabBarActiveTintColor: 'tomato',
          //tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="CreateNote" component={CreateNoteScreen}/>
        </Tab.Navigator>
      </NavigationContainer>  
    );
  }