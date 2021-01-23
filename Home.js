import React, { useState, Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Share, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, ScrollView, Alert, Image, Button, ToastAndroid, Vibration, Platform } from "react-native";
import { sizes, lightColors } from './colorThemes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Event from './Event'
import moment from "moment"

const { width, height } = Dimensions.get('window');

const DATA = [
    {
        id: "1",
        title: 'OktoberFest',
        preview: "https://images.unsplash.com/photo-1592754099136-4b447d9bfd15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
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

function DetailsScreen({ route, navigation }) {

    /* 2. Get the param */



    const { id } = route.params;
    const { data } = route.params;
    const { image } = route.params;
    const { title } = route.params;

    var images = [];

    for (let i = 0; i < 10; i++) {
        images.push(<Image key={i} source={{ uri: image }} style={styles.image} />);
    }


    const onShare = async () => {
        try {
          const result = await Share.share({
            title: title,
            message:  title + '  |  ' + '08 : 24 :36 Time Remaining',
              url: image
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
              if (Platform.OS === 'android') {
                Vibration.vibrate([50, 50]);
                ToastAndroid.showWithGravity('Sharing!!!', ToastAndroid.SHORT, ToastAndroid.CENTER)
              }
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={{ uri: image }} resizeMode="contain" style={{ width, height: height / 2.8 }} />
            <View style={styles.product}>
                <Text style={{ fontSize: sizes.h2, fontWeight: 'bold', color: lightColors.primary }}> {title} </Text>
                <View style={{ flex: 0, flexDirection: 'row', marginTop: sizes.base, marginBottom: sizes.base, marginLeft: sizes.base, marginRight: sizes.base }} >
                    <Text style={styles.tag}><MaterialCommunityIcons name="bell-ring" size={sizes.caption} /> {data} </Text>
                </View>
                <TouchableOpacity onPress={onShare}>
                    <View style={{ flex: 0, flexDirection: 'row', marginTop: sizes.base, marginBottom: sizes.base, marginLeft: sizes.base, marginRight: sizes.base }} >
                        <Text style={styles.tag}><MaterialCommunityIcons name="share-variant" size={sizes.caption} /> Share </Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  >{data}</Text>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  ><Event /></Text>
                {/*  <View style={{ style: styles.divider, marginTop: sizes.padding * 0.9, marginBottom: sizes.padding * 0.9, marginLeft: sizes.padding * 0.9, marginRight: sizes.padding * 0.9 }}  ></View>*/}
                <View style={styles.divider} ></View>
                <View>
                    <Text style={{ fontWeight: '500', color: lightColors.primary }}>Gallery</Text>
                    <View style={{ flexDirection: 'row', style: styles.divider, marginTop: sizes.padding * 0.9, marginBottom: sizes.padding * 0.9, marginLeft: sizes.padding * 0.9, marginRight: sizes.padding * 0.9 }}   >

                        {images.slice(1, 3)}

                        <View style={styles.more}>
                            <Text style={{ color: lightColors.text }}>+{images.slice(3).length}</Text>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

//const Item = ({ item, onPress, style, navigation }) => (
const Item = ({ item, navigation }) => (
    /*<TouchableOpacity onPress={onPress} style={[styles.item, style]}>       <Text style={styles.title}>{item.title}</Text>*/
    <TouchableOpacity activeOpacity={0.9} accessible={true}
        accessibilityLabel="Tap me!" accessibilityLabel="Memo" accessibilityHint="Navigates to the previous screen"
        accessibilityActions={[
            { name: 'cut', label: 'cut' },
            { name: 'copy', label: 'copy' },
            { name: 'paste', label: 'paste' }
        ]}
        onAccessibilityAction={(event) => {
            switch (event.nativeEvent.actionName) {
                case 'cut':
                    Alert.alert('Alert', 'cut action success');
                    break;
                case 'copy':
                    Alert.alert('Alert', 'copy action success');
                    break;
                case 'paste':
                    Alert.alert('Alert', 'paste action success');
                    break;
            }
        }}
        // onPress={onPress} 
        style={{ paddingVertical: 20 }}
        onPress={() =>
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
                id: 1,
                data: 'Something',
                image: item.preview,
                title: item.title
            })
        }  >
        <ImageBackground style={[styles.flex, styles.destination, styles.shadow]} imageStyle={{ borderRadius: 20 }} source={{ uri: item.preview }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: sizes.h3, fontWeight: '500', color: lightColors.background }}>{item.title}</Text>
                <Text style={{ fontSize: sizes.h1, fontWeight: 'bold', color: lightColors.background }}>
                    <MaterialCommunityIcons name="clock-fast" style={{ fontWeight: 'bold' }} size={sizes.h1} color={lightColors.background} /> <Event /></Text>
                <Text style={{ fontSize: sizes.h3, fontWeight: '500', color: lightColors.background }}> <MaterialCommunityIcons name="bell-ring" style={{ fontWeight: 'bold' }} size={sizes.h1} color={lightColors.background} /></Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

function HomeScreen({ route, navigation }) {


    const [toggleHorizontal, setoggleHorizontal] = useState(false);
    //const Home  = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const time = moment().format('ll');
    const renderHeader = () => {
        return (
            <View style={{ flex: 0, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', style: styles.header, }} >
                <Text style={{ color: '#d7dbdd', fontSize: 40 }}>{time}</Text>
                <TouchableOpacity>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcons name="webpack" color={'#283747'} size={40} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#d7dbdd" : "#d7dbdd";
        //const { toggleHorizontal } = this.state;
        return (
            <Item
                item={item}
                //  onPress={() => setSelectedId(item.id)}
                navigation={navigation}
                onPress={() =>

                    //  setSelectedId(item.id)
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {

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
            {renderHeader()}
            <View style={{ flex: 0, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => setoggleHorizontal(!toggleHorizontal)}>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcons name={!toggleHorizontal ? "view-carousel" : "view-agenda"} color={'#d7dbdd'} size={30} />
                        {/*view-agenda */}
                    </View>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    bounces={false}
                    horizontal={toggleHorizontal}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
    //};

}

const Stack = createStackNavigator();

function MemoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // headerStyleInterpolator: forFade,
                    headerTintColor: 'white',
                    headerShown: false,
                    headerStyle: { backgroundColor: '#c0c0c0' },
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            />
            <Stack.Screen
                name="Details"
                title=""
                component={DetailsScreen}
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

export default function Memos() {
    return (
        <MemoStack />
    );
};


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16 * 2,
        paddingTop: 16 * 2,
        padding: 16 * 2
    },
    avatar: {
        height: 16 * 2.4,
        width: 16 * 2.4,
        borderRadius: 16 * 1.2,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        // padding: 16,
        paddingVertical: 20
        //   marginVertical: 8,
        //   marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    flex: {
        flex: 0,
    },
    destination: {
        width: width - (36 * 2),
        height: width * 0.6,
        marginHorizontal: 36,
        paddingHorizontal: 36,
        paddingVertical: 36 * 0.66,
        borderRadius: 20,
    },
    shadow: {
        shadowColor: '#283747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        //   elevation: 15,
    },
    product: {
        paddingHorizontal: sizes.base * 2,
        paddingVertical: sizes.padding
    },
    tag: {
        borderColor: lightColors.text,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: sizes.base,
        paddingHorizontal: sizes.base,
        paddingVertical: sizes.base / 2.5,
        marginRight: sizes.base * 0.625,
        fontSize: sizes.caption,
        color: lightColors.text
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: sizes.base
    },
    more: {
        flex: 0,
        borderRadius: sizes.radius,
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(197,204,214,0.20)",
        width: 55,
        height: 55
    },
    divider: {
        height: 0,
        margin: 16 * 2,
        borderBottomColor: '#d7dbdd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 0,
        color: '#d7dbdd',
    }
});

