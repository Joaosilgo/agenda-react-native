import React, { useState, Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Share, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, ScrollView, Alert, Image, Button, ToastAndroid, Vibration, Platform } from "react-native";
import { sizes, lightColors } from './colorThemes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//import Example from './Example'
import moment from "moment";

const { width, height } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.6;
const ITEM_HEIGHT = ITEM_WIDTH * 0.75;
const SPACING = 10;


const DATA = [
    {
        id: "1",
        title: 'OktoberFest',
        preview: "https://images.unsplash.com/photo-1611124601305-936c18b1ea0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
        id: "2",
        title: "Red Bull Soapbox Race",
        preview: 'https://images.unsplash.com/photo-1603722796411-de70d5b992e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "3",
        title: "Cape Town International Jazz Festival",
        preview: 'https://images.unsplash.com/photo-1610482650877-a580984185a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "4",
        title: "Snowbombing",
        preview: 'https://images.unsplash.com/photo-1610444665877-d0311e9fde19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "5",
        title: "Coachella",
        preview: 'https://images.unsplash.com/photo-1610482650877-a580984185a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "6",
        title: "The US Open, New York, NY",
        preview: 'https://images.unsplash.com/photo-1610620746460-de78cf3d1705?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "7",
        title: "FIFA World Cup",
        preview: 'https://images.unsplash.com/photo-1418985227304-f32df7d84e39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "8",
        title: "UEFA Champions League, the Euro Cup",
        preview: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80'
    },
    {
        id: "9",
        title: "The Winter Games",
        preview: 'https://images.unsplash.com/photo-1610128114197-485d933885c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: "10",
        title: "Wimbledon, London, UK",
        preview: 'https://images.unsplash.com/photo-1604766664165-668315c14b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    }
];


function NotesDetailsScreen({ route, navigation }) {

    /* 2. Get the param */
    const { id } = route.params;
    const { data } = route.params;




    return (

        //  <Example/>
        <ScrollView showsVerticalScrollIndicator={false}>

        </ScrollView>
    )
}

//const Item = ({ item, onPress, style, navigation }) => (
const Item = ({ item, navigation }) => (
    /*<TouchableOpacity onPress={onPress} style={[styles.item, style]}>       <Text style={styles.title}>{item.title}</Text>*/
    <TouchableOpacity activeOpacity={0.9} style={styles.item}

        // onPress={onPress} 
        // style={{ padding:20 }}
        onPress={() =>
            /* 1. Navigate to the Details route with params */
            navigation.navigate('NotesDetails', {
                id: 1,
                data: 'Something',

            })
        }  >


        <Image
            source={{ uri: item.preview }}
            style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                borderRadius: 15,
                aspectRatio: 1,

            }}
        />





    </TouchableOpacity>
);

function NotesScreen({ route, navigation }) {




    const renderItem = ({ item }) => {

        return (
            <Item
                item={item}
                navigation={navigation}
                onPress={() =>
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('NotesDetails', {
                        id: 1,
                        data: 'Something',
                        item: item
                    })
                }

            //  style={{ backgroundColor }}


            />
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // scrollEventThrottle={16}
                    //    bounces={false}
                    // inverted
                    numColumns={2}

                />
            </SafeAreaView>
            <TouchableOpacity
                /* 1. Navigate to the Details route with params */
                onPress={() => console.log('Pressed')} style={{ position: 'absolute', borderRadius: 45, width: 50, height: 50, zIndex: 50, right: 30, bottom: 30, alignItems: 'center', elevation: 20 }} >
                <AntDesign name="pluscircle" color='#283747' size={45} />
            </TouchableOpacity>
        </SafeAreaView>

    );
    //};

}

const Stack = createStackNavigator();

function NotesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Notes"
                component={NotesScreen}
                options={{
                    // headerStyleInterpolator: forFade,
                    headerTintColor: 'white',
                    headerShown: false,
                    headerStyle: { backgroundColor: '#c0c0c0' },
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            />
            <Stack.Screen
                name="NotesDetails"
                title=""
                component={NotesDetailsScreen}
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
};

export default function Note() {
    return (
        <NotesStack />
    );
};


const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        //   backgroundColor: lightColors.text,
        flexGrow: 1,

        margin: 2,
        padding: 5,

        aspectRatio: 1,
        flex: 1 / 2
    }

});

