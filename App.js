import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useMemo, useRef, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
import SettingsScreen from './SettingsScreen'
import Memos from './Home'
import AgendaScreen from './Calendar'
import Login from './Profile'
import FormMemo from './FormMemo'




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

    <AgendaScreen />
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
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          //  elevation: 0,  // <-- this is the solution
          height: 47
        }


      }}
    >

      <Tab.Screen
        name="Events"
        component={Events}

        options={{

          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
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
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (


            <AntDesign name="pluscircle" color={color} size={55} />

          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profiles}

        options={{

          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (

            <MaterialCommunityIcons name="shield-account" color={color} size={size} />

          ),
        }}
      />
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


export default function App() {
  return (
    /*  <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View><View style={{flex:1}}> </View> */

    <AppearanceProvider>
      <ThemeProvider>

        <NavigationContainer>
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


