import { StatusBar } from 'expo-status-bar';

import React, { useCallback, useMemo, useRef, Component  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Appearance } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './ThemeContext';
import { Screen } from './Screen';
import { Toggle } from './Toggle';
import SettingsScreen from './SettingsScreen';
import Memos from './Home';
import AgendaScreen from './Calendar';
import Login from './Profile';
import FormMemo from './FormMemo';
import Note from './Notes'

import FormCalendar from './FormCalendar'
import { sizes, lightColors } from './colorThemes';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//const { width } = Dimensions.get('screen')

const { width, height } = Dimensions.get('window');
//const { width, height } = Dimensions.get('screen');
//notebook

function Notes() {
 
  return (
    <Screen>
      <View style={{ flex: 1 }}>
      {/*<Note/> */}
      {/* <Test/> */}
      <Note/>
      </View>
    </Screen>
  );
}

function Feed() {
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <Memos />
      </View>
    </Screen>
  );
}

function Settings() {
  return (
    <Screen>
      {/*   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text style={{ color: '#d7dbdd', alignItems: 'center' }} >Settings!</Text>  */}
       
      <View style={{ flex: 1 }}>
        <SettingsScreen />
        {/*  </View> */}
      </View>
    </Screen >
  );
}

function Events() {
  return (
    <Screen>
    
      <View style={{ flex: 1 }}>
        < FormMemo />
      </View>
    </Screen>

  );
}

function Agenda() {
  return (

    <Stack.Navigator>
    <Stack.Screen
      name="Agenda"
      component={AgendaScreen}
      options={{
        // headerStyleInterpolator: forFade,
        headerTintColor: 'white',
        headerShown: false,
        headerStyle: { backgroundColor: '#c0c0c0' },
        headerTitleStyle: { fontWeight: 'bold' }
    }}
    />
    <Stack.Screen
      name="Form"
      component={FormCalendar}
      options={{
        title: '',
        headerStyle: {
            height: sizes.base * 4,
            backgroundColor: '#FFFFFF', // or 'white
            borderBottomColor: "transparent",
            elevation: 0// for android



        },

        // headerRight: () => ( <MaterialCommunityIcons  onPress={() => console.log('Pressed')} name="dots-vertical" color={'#d7dbdd'} size={30} /> ),
        headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Pressed')}>
                <MaterialCommunityIcons name="dots-vertical" color={'#d7dbdd'} size={30} />
            </TouchableOpacity>
        ),
        headerBackImage: () => (<MaterialCommunityIcons name="keyboard-backspace" color={'#d7dbdd'} size={30} />),

        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: "center",
            marginLeft: sizes.base * 2,
            paddingRight: sizes.base
        },
        headerRightContainerStyle: {
            alignItems: "center",
            paddingRight: sizes.base,

        }


    }}
      
    />
  </Stack.Navigator>
    

  );
}


function Profiles() {
  return (
    <Screen>
      
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    </Screen>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#283747',
        adaptive: true,
        allowFontScaling: true,
        showLabel: true,
        inactiveTintColor: '#C4C2C2',
        activeBackgroundColor: '#FAFAFA',
        inactiveBackgroundColor: '#FAFAFA',
        backgroundColor: '#ffffff',
        labelStyle:{
          fontSize:8,
          padding:0
        },
        iconStyle:{
          paddingTop:0,
          paddingBottom:0.5,
          
  
        },
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,  // <-- this is the solution

         height: height*0.06,
          padding: 0,
          margin:0
          
        }


      }}
    >
{/* 
<Tab.Screen
        name="Home"
        component={Notes}
        
        options={{
          tabBarLabel: 'Notes',
          
          //tabBarIcon: ({ color, size }) => (<AntDesign name="pluscircle" color={color} size={55} />),
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook" color={color} size={size} />),
        }}
      />
      */}
      <Tab.Screen
        name="Calendar"
        component={Agenda}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="calendar" color={color} size={size} />
          ),
        }}
      />
     
       <Tab.Screen
        name="Events"
        component={Feed}

        options={{

          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={50} />
          ),
        }}
      />
      {/* 
      <Tab.Screen
        name="Profile"
        component={Profiles}

        options={{

          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="shield-account" color={color} size={size} /> ),
        }}
      />
      */}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const navigationRef = React.createRef();

export function  navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export default function App() {
  return (
    /*  <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View><View style={{flex:1}}> </View> */

    <AppearanceProvider>
      <ThemeProvider>
      <StatusBar hidden />
        <NavigationContainer ref={navigationRef}>
          <MyTabs />
        </NavigationContainer>

      </ThemeProvider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
      width: 0,            // These can't both be 0
      height: 1,           // i.e. the shadow has to be offset in some way
    },
    // Android
    shadowOffset: {
      width: 0,            // Same rules apply from above
      height: 1,           // Can't both be 0
    }
  }
});


