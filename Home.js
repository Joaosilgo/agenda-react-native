import React, { useState, useEffect, Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Share, FlatList, SafeAreaView, StatusBar, StyleSheet, RefreshControl, Text, View, TouchableOpacity, ImageBackground, Dimensions, ScrollView, Alert, Image, Button, ToastAndroid, Vibration, Platform } from "react-native";
import { sizes, lightColors } from './colorThemes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Event from './Event'
import moment from "moment"
import FormMemo from './FormMemo'


import AsyncStorage from '@react-native-async-storage/async-storage';

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

const getAllKeys = async () => {
    //AsyncStorage.clear();
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch (e) {
        // read key error
    }

    console.log(keys.length)

    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
}

const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}

const importData = async () => {
    try {
        //  const keys = await AsyncStorage.getAllKeys();
        //  const result = await AsyncStorage.multiGet(keys);





        /*   for (var key of result.values()) {
               console.log(key);
             } */
        /*
                  const newArray = [];
                  this.DATA.forEach(obj => {
                    if (!newArray.some(o => o.name === obj.name)) {
                      newArray.push({ ...obj })
                    }
               
                  });
        */

        /*
               for (let inKey of keys) {
                let obj = await AsyncStorage.getItem(inKey);
                obj = JSON.parse(obj);
                data.push(obj); 
        
                */


        const data = [];

        /* const listData = [];
         let keys = await AsyncStorage.getAllKeys();
         keys.forEach(async function (inKey) {
             const person = await AsyncStorage.getItem(inKey);
            var x = listData.push(JSON.parse(person));
            console.log(x.toString());
         });*/
        let keys = await AsyncStorage.getAllKeys();
        for (let inKey of keys) {
            let obj = await AsyncStorage.getItem(inKey);
            obj = JSON.parse(obj);
            data.push(obj);
        }
        //   for (var [key, value] of result) {



        // console.log(key + " = " + value);
        // DATA.push(JSON.parse(value))



        // data.push(JSON.parse(value))


        /* for (var i = 0; i < DATA.length; i++) {
             
             if (DATA[i].id === key) {
                 DATA.pop(JSON.parse(value))
                 console.log(DATA[i])
             }
 
         } */


        //DATA.push(JSON.parse(value))
        /*   data.forEach(function(value){
               if (DATA.indexOf(value)==-1) DATA.push(value);
             });
           
           */



        /* for (var x = 0; x < DATA.length; x++) {
 
         }*/


        // const Data = DATA.concat(data)
        /*
        for (var x = 0; x < DATA.length; x++) {

            for (var i = 0; i < data.length; i++) {

                if (data[i].id === DATA[x].id) {
                    DATA.pop(JSON.parse(value))
                    console.log(DATA[i])
                }

            }

        }
        */





        //var x = JSON.stringify(DATA);
        // console.log(JSON.parse(x));
        // console.log(DATA.keys);
        // return result;
       //  console.log(data);

        return data;

    } catch (error) {
        console.error(error)
    }
}

function DetailsScreen({ route, navigation }) {

    /* 2. Get the param */
    const { id } = route.params;
    const { title } = route.params;
    const { data } = route.params;
    const { image } = route.params;
    const { description } = route.params;
    const { notes } = route.params;
    const { alert } = route.params;
    const { date } = route.params;
    var notification = String(alert);
    var images = [];

    for (let i = 0; i < 10; i++) {
        images.push(<Image key={i} source={{ uri: image }} style={styles.image} />);
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                title: title,
                message: title + '  |  ' + date + ' Time Remaining',
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

                <TouchableOpacity onPress={() => removeValue(id).then(navigation.navigate('Home'))}>
                    <View style={{ flex: 0, flexDirection: 'row', marginTop: sizes.base, marginBottom: sizes.base, marginLeft: sizes.base, marginRight: sizes.base }} >
                        <Text style={styles.tag}><MaterialCommunityIcons name="delete-variant" size={sizes.caption} /> DELETE </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('Alert')}>
                    <View style={{ flex: 0, flexDirection: 'row', marginTop: sizes.base, marginBottom: sizes.base, marginLeft: sizes.base, marginRight: sizes.base }} >
                        <ImageBackground
                            style={styles.tag}
                            imageStyle={{ borderRadius: sizes.base }}
                            source={{ uri: image }}
                        ><View  ><Text style={{ color: lightColors.background }} > {alert ? <MaterialCommunityIcons name="alarm-bell" size={sizes.caption} color={lightColors.background} /> : <MaterialCommunityIcons name="bell-cancel" size={sizes.caption} color={lightColors.background} />}   Notification </Text></View></ImageBackground>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={onShare}>
                    <View style={{ flex: 0, flexDirection: 'row', marginTop: sizes.base, marginBottom: sizes.base, marginLeft: sizes.base, marginRight: sizes.base }} >
                        <Text style={styles.tag}><MaterialCommunityIcons name="share-variant" size={sizes.caption} /> Share </Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  > {data}</Text>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  > {/* <Event /> */}</Text>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  > {date}</Text>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  > {description}</Text>
                <Text style={{ color: lightColors.text, height: 22, fontWeight: "200" }}  > {notes}</Text>
                {/*  <View style={{ style: styles.divider, marginTop: sizes.padding * 0.9, marginBottom: sizes.padding * 0.9, marginLeft: sizes.padding * 0.9, marginRight: sizes.padding * 0.9 }}  ></View>*/}
                <View style={styles.divider} ></View>
                <View>
                    <Text style={{ fontWeight: '500', color: lightColors.primary }}> Gallery </Text>
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
const Item = ({ item, date, alert, navigation }) => (
    /*<TouchableOpacity onPress={onPress} style={[styles.item, style]}>       <Text style={styles.title}>{item.title}</Text>*/
    <TouchableOpacity activeOpacity={0.9} accessible={true} accessibilityLabel="Tap me!" accessibilityLabel="Memo" accessibilityHint="Navigates to the previous screen" style={{ paddingVertical: 20 }}
        onPress={() =>
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
                id: item.id,
                data: 'Something',
                image: item.preview,
                title: item.title,
                description: item.description,
                notes: item.notes,
                alert: item.alert,
                date: date,
            })
        }>
        <ImageBackground style={[styles.flex, styles.destination, styles.shadow]} imageStyle={{ borderRadius: 20 }} source={{ uri: item.preview }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: sizes.h3, fontWeight: '500', color: lightColors.background }}>{item.title}</Text>
                <Text style={{ fontSize: sizes.base, fontWeight: 'bold', color: lightColors.background }}>
                    <MaterialCommunityIcons name="clock-fast" style={{ fontWeight: 'bold' }} size={sizes.h1} color={lightColors.background} /> {date} </Text>
                <Text style={{ fontSize: sizes.h3, fontWeight: '500', color: lightColors.background }}> <MaterialCommunityIcons name="bell-ring" style={{ fontWeight: 'bold' }} size={sizes.h1} color={lightColors.background} /></Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

function HomeScreen({ route, navigation }) {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);


    importData().then(items => setData(items));


    /*
    
        
    
       */


    /* setTimeout(function () {
         setData(DATA);
     }.bind(this), 1000); */


    // useEffect(() => {
    // Update the document title using the browser API
    //  setData(importData())

    //  importData();
    //  },[]);





    const [toggleHorizontal, setoggleHorizontal] = useState(false);
    //const Home  = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const time = moment().format('ll');
    const renderHeader = () => {
        // getAllKeys();

        return (
            <View style={{ flex: 0, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', style: styles.header, }} >
                <Text style={{ color: '#d7dbdd', fontSize: 35, fontWeight: '500' }}>{time}</Text>
                <TouchableOpacity>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcons name="webpack" color={'#283747'} size={40} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    const renderItem = ({ item }) => {

        if (item !== null) {

            const backgroundColor = item.id === selectedId ? "#d7dbdd" : "#d7dbdd";
            const DateParse = new Date(item.date)
            const count = moment().add(1, 'seconds'); //.add({ days: DateParse.getDay(), hours: DateParse.getHours(), minutes: DateParse.getMinutes(), seconds: DateParse.getSeconds() })
            const alertNotification = Boolean(item.alert)


            var eventTime = 1366549200; // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
            var currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
            var diffTime = eventTime - currentTime;
            var duration = moment.duration(diffTime * 1000, 'milliseconds');

            // Date.parse(item.date)
            //const { toggleHorizontal } = this.state;
            return (
                <Item
                    item={item}
                    date={DateParse.toISOString()}
                    alert={alertNotification}
                    //  onPress={() => setSelectedId(item.id)}
                    navigation={navigation}
                    onPress={() =>
                        //  setSelectedId(item.id)
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Details', {
                            id: item.id,
                            data: 'Something',
                            item: item
                        })
                    }

                //  style={{ backgroundColor }}


                />
            );

        }
    };



    const renderEmptyContainer = () => {

        return (
            <View style={{ flex: 0, marginTop: sizes.base, marginBottom: sizes.base, marginLeft: sizes.base, marginRight: sizes.base, color: lightColors.text, fontWeight: "bold", fontSize: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: lightColors.text, height: 25, fontWeight: "bold", fontSize: 20, alignItems: 'center', justifyContent: 'center' }}  > Such Empty Mutch Meaning!!! WOW</Text>
                <Image  style={{width: 100, height: 100, tintColor: '#d7dbdd'}}  source={require('./assets/doge.png')} />
            </View>
        )

    }






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
                    data={data}
                    renderItem={
                        renderItem
                    }
                    // keyExtractor={(item) => item.id}
                    // keyExtractor={(item, index) => index.toString()}
                    keyExtractor={(item) => {
                        if (item !== null) {
                            item.id.toString();;
                        }
                    }}
                    // extraData={selectedId}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    bounces={false}
                    horizontal={toggleHorizontal}
                    //  onRefresh={() => setRefreshing( !refreshing)}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => importData()}
                        />

                    }
                    refreshing={refreshing}
                    ListEmptyComponent={renderEmptyContainer}
                />
            </SafeAreaView>
            <TouchableOpacity onPress={() =>
                /* 1. Navigate to the Details route with params */
                //onPress={() => console.log('Pressed')}
                navigation.navigate('Countdown')} style={{ position: 'absolute', borderRadius: 45, width: 50, height: 50, zIndex: 50, right: 30, bottom: 30, alignItems: 'center', elevation: 20 }} >
                <AntDesign name="pluscircle" color='#283747' size={45} />
            </TouchableOpacity>
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
            <Stack.Screen
                name="Countdown"
                title=""
                component={FormMemo}
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

