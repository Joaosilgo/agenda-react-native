import React, { useEffect, useState, Component } from "react";
import { Switch, Image, Platform, Modal, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, SafeAreaView, ImageBackground, Dimensions, Animated, TextInput, FlatList, RefreshControl, ActivityIndicator, unstable_batchedUpdates } from "react-native";
const { width, height } = Dimensions.get('window');
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sizes, lightColors } from "./colorThemes";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
// constants

const servers = [
    {
        name: "Default",
        icon: 'https://images.unsplash.com/photo-1603722796411-de70d5b992e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        name: "New York, NY",
        icon: 'https://images.unsplash.com/photo-1610444665877-d0311e9fde19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        name: "London",
        icon: 'https://images.unsplash.com/photo-1610482650877-a580984185a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        name: "Moscow",
        icon: 'https://images.unsplash.com/photo-1610620746460-de78cf3d1705?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
    ,
    {
        name: "Comporta",
        icon: 'https://images.unsplash.com/photo-1418985227304-f32df7d84e39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        name: "Portugal",
        icon: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80'
    },
    {
        name: "Unknow",
        icon: 'https://images.unsplash.com/photo-1610128114197-485d933885c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        name: "Ali",
        icon: 'https://images.unsplash.com/photo-1604766664165-668315c14b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    }
];


export const Time = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [countdown, setCountdown] = useState(moment.duration().add({ days: date.getDay(), hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() }));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

    };
    /*
    
     const   updateTimer=()=>{
        
            const x = setInterval(()=>{
              countdown
        
              if(countdown <=0){
              //  clearInterval(x)
              }else {
               // countdown = countdown.subtract(1,"s")
                const days = countdown.days()
                const hours = countdown.hours()
                const mins = countdown.minutes()
                const secs = countdown.seconds()
                
          
    
    
                return( <Text style={{ color: '#d7dbdd' }}>{days} Days : {hours} Hours : {mins} Minutes : {secs} Seconds</Text>)
              }
    
              return( <Text style={{ color: '#d7dbdd' }}></Text>)
            },1000)
        
          }
          */



    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{ flex: 0 }} margin={sizes.base}>
            <View style={{ flex: 0 }} >
                <Text style={{ color: '#9DA3B4' }}>Time</Text>
            </View>
            <View>
                <View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                        <Text style={{ color: '#d7dbdd' }}>Date</Text>
                        <TouchableOpacity onPress={showDatepicker} title="Show date picker!" ><Text style={{ color: '#d7dbdd' }}>{date.toDateString()}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={showDatepicker} title="Show date picker!" ><MaterialCommunityIcons name="calendar-clock" color={lightColors.primary} size={30} /></TouchableOpacity>
                    </View>
                </View>
                <View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                        <Text style={{ color: '#d7dbdd' }}>Time</Text>
                        <TouchableOpacity onPress={showTimepicker} title="Show time picker!" ><Text style={{ color: '#d7dbdd' }}>{date.toLocaleTimeString()}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={showTimepicker} title="Show time picker!" ><MaterialCommunityIcons name="timer" color={lightColors.primary} size={30} /></TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                        <Text style={{ color: '#d7dbdd' }}>Countdown</Text>
                        <Text style={{ color: '#d7dbdd' }}>{countdown.days()} Days : {countdown.hours()} Hours : {countdown.minutes()} Minutes : {countdown.seconds()} Seconds</Text>



                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                        neutralButtonLabel="clear"
                        style={{ flex: 1 }}

                    />
                )}
            </View>
        </View>
    );
};


export default class FormMemo extends Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            connected: false,
            server: null,
            showServers: false,
            // automatic: {
            //     name: "Default",
            //     icon: 'https://images.unsplash.com/photo-1603722796411-de70d5b992e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            // },
            automatic: {
                id: "hXEy6MYKr-Y",
                urls: {

                    regular: "https://images.unsplash.com/photo-1611170625343-48ced6508448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTkyMTB8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080",
                },
                alt_description: ""
            },

            searchFocus: new Animated.Value(0.6),
            searchString: null,
            data: [],
            isLoading: false,
            isRefreshing: false,
            toggleHorizontal: false,

            //  dateString: moment(new Date()).format('YYYY-MM-DD'),
            // date: this.props.date || new Date(),


            //date: moment(new Date()).format('YYYY-MM-DD'),



        };

    }

    componentDidMount() {
        this.FetchImages();
    }
    /*
        componentDidUpdate(prevProps, prevState) {
            if (prevState.data !== this.state.data) {
                console.log('data state has changed.')
            }
        }
    
        componentWillUnmount() {
            this.FetchImages(); //Method for API call
          }
    */



    /*   onRefresh() {
            this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
            const url = 'https://api.unsplash.com/collections/59171832/photos?&per_page=100&client_id=3hHcOZv49kdRv__cCxTxMr86y91cBB1fj3hmJovDcA8';
            fetch(url)
                .then((responseJson) => {
                    console.log('getting data from fetch', responseJson)
                    this.setState({
                        isRefreshing: false,
                        data: responseJson
                    })
                })
                .catch(error => {
                    this.setState({ isRefreshing: false, error: 'Something just went wrong' }) // false isRefreshing flag for disable pull to refresh
                });
        }
        */


    renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!this.state.isLoading) return null;
        return (
            <ActivityIndicator />
        );
    };

    handleLoadMore = () => {
        if (!this.state.isLoading) {
            this.page = this.page + 1; // increase page by 1
            // ; // method for API call 
        }
    };

    FetchImages = () => {
        this.setState({

            isLoading: true,

        })
        fetch("https://api.unsplash.com/collections/59171832/photos?&per_page=100&client_id=3hHcOZv49kdRv__cCxTxMr86y91cBB1fj3hmJovDcA8")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                this.setState({
                    isLoading: false,
                    isRefreshing: false,
                    data: responseJson
                })
            })
            .catch(error => {
                this.setState({
                    isLoading: false,

                }),
                    console.log(error)
            }
            )
    }

    handleServer(server) {
        this.setState({ server, connected: false, showServers: false });
        //   this.goForFetch()
    }

    renderHeader = () => {
        return (
            <View style={{ flex: 0, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', style: styles.header, }} >
                <Text style={{ color: '#d7dbdd', fontSize: 30, fontWeight: '500' }}>Reminder</Text>
                <TouchableOpacity>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcons name="view-dashboard" color={'#283747'} size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    handleSearchFocus(status) {
        Animated.timing(this.state.searchFocus, {
            toValue: status ? 0.8 : 0.6, // status === true, increase flex size
            duration: 150,// ms
            useNativeDriver: true, // <-- Add this
        }).start();
    }

    renderRight(isEditing) {
        return (
            <TouchableOpacity style={styles.toggle}>
                <MaterialCommunityIcons name={isEditing ? "close" : "image-search"}
                    size={sizes.h3}
                    color={lightColors.text}
                    style={styles.searchIcon} />
            </TouchableOpacity>
        );
    }

    renderSearch() {
        const { searchString, searchFocus } = this.state;
        const isEditing = searchFocus && searchString;

        return (

            <Animated.View flex={searchFocus} style={styles.search} >
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={lightColors.text}
                    secureTextEntry={false}
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    style={styles.searchInput}
                    onFocus={() => this.handleSearchFocus(true)}
                    onBlur={() => this.handleSearchFocus(false)}
                    onChangeText={text => this.setState({ searchString: text })}
                    value={searchString}
                    onRightPress={() =>
                        isEditing ? this.setState({ searchString: null }) : null
                    } />
                {this.renderRight(isEditing)}
            </Animated.View>
        )
    }

    renderServer() {
        const { server, automatic } = this.state;
        const connection = server || automatic;

        return (
            <View style={{ flex: 0 }}>
                {/* <Image resizeMode="contain" source={{uri: connection.icon}} /> */}
                <ImageBackground style={[styles.flex, styles.destination, styles.shadow]} imageStyle={{ borderRadius: 20 }}
                    source={{ uri: connection.urls.regular }}>
                    <Text style={{ color: lightColors.background, margin: 10, fontSize: sizes.h3 }}>{connection.alt_description}</Text>
                </ImageBackground>

            </View>
        );
    }

    renderItem = ({ item, index }) => {
        //key={`server-${item.name}`} 

        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.handleServer(item)}>
                <View style={{ flex: 0, margin: sizes.padding, alignItems: "center", }}>
                    <ImageBackground style={[styles.flex, styles.destination, styles.shadow]} imageStyle={{ borderRadius: 20 }} source={{ uri: item.urls.regular }}>
                        <Text style={{ color: lightColors.background, margin: 10, padding: sizes.subtitle, fontSize: sizes.h2 }}>{item.alt_description}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    }

    renderSwitches = () => {
        const switchComponents = (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                <Text style={{ color: '#d7dbdd' }}>Alerts</Text>
                <Switch trackColor={{ false: "#767577", true: "#616c80" }}
                // thumbColor={isDark ? "#283747" : "#d7dbdd"}
                //value={isDark}

                //  onValueChange={toggleScheme} 
                />
            </View>
        )

        return (
            <View>
                {switchComponents}
            </View>
        );
    }

    renderInputs = () => {

        return (

            <View style={{ flex: 0 }} margin={sizes.base}>
                <View style={{ flex: 0 }} >
                    <Text style={{ color: '#9DA3B4' }}>Name</Text>
                </View>
                <TextInput
                    style={[styles.input, styles.inputView]}
                    // secureTextEntry={false}
                    autoComplete="off"
                    contextMenuHidden={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    placeholder="Eg. OktoberFest..."
                // onChangeText={text => this.setState({ email: text })}  
                />
            </View>

        );
    }

    renderDescription = () => {

        return (

            <View style={{ flex: 0 }} margin={sizes.base}>
                <View style={{ flex: 0 }} >
                    <Text style={{ color: '#9DA3B4' }}>Description</Text>
                </View>
                <TextInput
                    style={[styles.input, styles.inputView]}
                    // secureTextEntry={false}
                    autoComplete="off"
                    contextMenuHidden={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    placeholder="Eg. Bla Bla Bla..."
                // onChangeText={text => this.setState({ email: text })}  
                />
            </View>

        );
    }




    renderNotes = () => {

        return (

            <View style={{ flex: 0 }} margin={sizes.base}>
                <View style={{ flex: 0 }} >
                    <Text style={{ color: '#9DA3B4' }}>Notes</Text>
                </View>
                <TextInput
                    style={[styles.input, styles.inputView]}
                    // secureTextEntry={false}
                    autoComplete="off"
                    contextMenuHidden={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    placeholder="Eg. Dont Forget..."
                    editable={false}
                
                // onChangeText={text => this.setState({ email: text })}  
                />
            </View>

        );
    }

    renderServers() {
        const { showServers, server, automatic, data, toggleHorizontal } = this.state;
        const connection = server || automatic;


        return (
            <Modal visible={showServers} animationType="fade" transparent   >
                <View style={{}} >
                    <View style={{ flex: 0, backgroundColor: lightColors.background, padding: sizes.padding, justifyContent: "center" }}   >
                        <Text style={{ fontSize: sizes.title, textAlign: "center", color: lightColors.text }}>Pick your Background</Text>
                        <TouchableOpacity activeOpacity={0.3} onPress={() => this.setState({ showServers: false })}>
                            <MaterialCommunityIcons name="close" size={sizes.h2} color={lightColors.text} />
                        </TouchableOpacity>

                        <View >
                            <TouchableOpacity onPress={() => this.setState({ toggleHorizontal: !toggleHorizontal })}>
                                <MaterialCommunityIcons name={!toggleHorizontal ? "view-carousel" : "view-agenda"} color={'#d7dbdd'} size={30} />
                            </TouchableOpacity>
                        </View>



                        <View style={styles.header}>

                            {this.renderSearch()}
                        </View>

                        {/*   <ScrollView showsVerticalScrollIndicator={false}>*/}
                        {/*     {servers.map(item => {
                            // const isConnected = connection.name === item.name;
                            //const isChecked = icons[isConnected ? "checked" : "unchecked"];
                            return (
                                <TouchableOpacity key={`server-${item.name}`} activeOpacity={0.8} onPress={() => this.handleServer(item)}>
                                    <View style={{ flex: 0, margin: sizes.padding, alignItems: "center", }}>
                                        <ImageBackground style={[styles.flex, styles.destination, styles.shadow]} imageStyle={{ borderRadius: 20 }} source={{ uri: item.icon }}>
                                            <Text style={{ color: lightColors.background, margin: 10, padding: sizes.h3, fontSize: sizes.h2 }}>{item.name}</Text>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}*/}


                        <FlatList
                            data={data}
                            extraData={this.state}
                            renderItem={this.renderItem}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isRefreshing}

                                // onRefresh={this.onRefresh}
                                />
                            }
                            refreshing={this.state.isRefreshing}
                            keyExtractor={(item) => item.id.toString()}
                            // keyExtractor={({ name }, index) => name.toString()}
                            //keyExtractor={keyExtractor}
                            // extraData={selectedId}
                            ListFooterComponent={this.renderFooter.bind(this)}
                            onEndReached={this.handleLoadMore.bind(this)}
                            onEndReachedThreshold={0.4}

                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            // horizontal={true}

                            // scrollEventThrottle={16}
                            // bounces={false}
                            horizontal={toggleHorizontal}
                        />


                        {/*       </ScrollView> */}
                    </View>
                </View>
            </Modal>
        );
    }



    render() {



        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 16 * 2 }} >
                {this.renderHeader()}
                <ScrollView showsVerticalScrollIndicator={false}>

                    {this.renderInputs()}
                    {this.renderDescription()}
                    <Time />
                    <View style={{}} style={styles.divider} ></View>

                    {this.renderSwitches()}
                    {this.renderNotes()}
                    <View style={{}} style={styles.divider} ></View>
                 
                        <View style={{ flex: 0 }} >
                            <View style={{ flex: 0 }} >
                                <Text style={{ color: '#9DA3B4' }}>Background</Text>
                            </View>
                            <View  style={{ margin: 16 * 2}} ></View>
                            <TouchableOpacity onPress={() => this.setState({ showServers: true })}>
                                {this.renderServer()}
                            </TouchableOpacity>
                        </View>
                        <View style={{}} style={styles.divider} ></View>
                        
                        <View style={{ flex: 1 ,  margin: 16 * 3 }} ><Button onPress={() => console.log('Pressed')} title="Done" /></View>
                      

                </ScrollView>
                {this.renderServers()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    inputView: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: "#C5CCD6",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#283747',
        borderRadius: sizes.radius,
        fontSize: sizes.font,
        fontWeight: "500",
        color: '#283747',
        height: sizes.base * 3
    },
    divider: {
        height: 0,
        margin: 16 * 2,
        borderBottomColor: '#d7dbdd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 0,
        color: '#d7dbdd',
    },
    searchInput: {
        fontSize: sizes.caption,
        height: sizes.base * 1.5,
        //  backgroundColor: "rgba(142, 142, 147, 0.06)",
        // borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: sizes.base / 1.333,
        paddingRight: sizes.base * 1.5,
        justifyContent: 'space-between',
        flexDirection: "row",
        justifyContent: "center"

    },
    search: {
        // height: sizes.base * 2,
        // width: width - sizes.base * 2,
        justifyContent: "center"

    },
    searchIcon: {
        position: "absolute",
        //   right: sizes.base / 1.333,
        //  top: sizes.base / 1.6
    },
    toggle: {
        position: "absolute",
        alignItems: "flex-end",
        //  width: sizes.base * 2,
        // height: sizes.base * 2,
        //  top: sizes.base,
        right: 0
    },
    header: {
        paddingHorizontal: 16 * 2,
        //   paddingTop: 16 * 3,

        paddingBottom: 8 * 2,
        //  padding: 16 * 3
    },
    avatar: {
        height: 16 * 2.4,
        width: 16 * 2.4,
        borderRadius: 16 * 1.2,
    },

    flex: {
        flex: 0,
    },
    destination: {
        width: width - (24 * 2),
        height: width * 0.3,
        marginHorizontal: 24,
        paddingHorizontal: 36,
        paddingVertical: 36 * 0.4,
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
    /* connect: {
         width: sizes.base / 2
     },
     connected: {
         borderColor: lightColors.primary
     },
     image: {
         width: 180,
         height: 180,
         marginVertical: 20
     }, 
    status: {
        width: sizes.base,
        height: sizes.base,
        marginLeft: sizes.small,
        flex: 0,
        borderRadius: sizes.base
    },*/
    servers: {
        width: sizes.width,
        height: sizes.base * 9,
        shadowOffset: {
            width: 0,
            height: -5
        },
        shadowOpacity: 0.05,
        shadowRadius: sizes.base / 2,
        flex: 0, justifyContent: "center",
        backgroundColor: lightColors.background,
        elevation: 3,
        shadowColor: lightColors.primary,
        shadowOffset: { width: 0, height: 3 - 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    }
});