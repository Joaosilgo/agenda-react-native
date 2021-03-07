import React, { Component } from 'react';

import { StyleSheet, ScrollView, Image, Linking, Text, View, TouchableOpacity, Switch, Platform, DevSettings, Alert, Button } from 'react-native';

import { Toggle } from './Toggle';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';




class SettingsScreen extends Component {




    renderHeader = () => {
        return (
            <View style={{ flex: 0, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', style: styles.header, }} >
                <Text style={{ color: '#d7dbdd', fontSize: 26 }}>Settings</Text>
                <TouchableOpacity>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcons name="webpack" color={'#283747'} size={30} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    renderInputs = () => {
        const inputComponents = (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>

                <Text style={styles.nonEditableInput} color={'#283747'}>{Platform.OS}</Text>

            </View>
        );
        const inputComponentsVersion = (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>

                <Text style={styles.nonEditableInput} color={'#283747'}>{Platform.Version}</Text>

            </View>
        );

        return (
            <View style={{ padding: 16, color: '#FFFFFF' }}>
                <Text style={{ color: '#d7dbdd' }}>OS:</Text>
                {inputComponents}
                <Text style={{ color: '#d7dbdd' }}>Version:</Text>
                {inputComponentsVersion}
            </View>
        );
    }




    renderAbout = () => {
        const about = (
            <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <Text style={styles.nonEditableInput} color={'#283747'} >About</Text>
                </View>
            </TouchableOpacity>
        );
        const faq = (
            <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <Text style={styles.nonEditableInput} color={'#283747'}>FAQ</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={{ padding: 16, color: '#FFFFFF' }}>
                <Text style={{ color: '#d7dbdd' }}>About:</Text>
                {about}
                <Text style={{ color: '#d7dbdd' }}>FAQ:</Text>
                {faq}
            </View>
        );
    }



    renderSwitches = () => {
        const switchComponents = (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                <Text style={{ color: '#d7dbdd' }}>Notifications</Text>
                {/*   <Switch/>*/}
                <Toggle />
            </View>
        )

        return (
            <View>
                {switchComponents}
            </View>
        );
    }

    renderSwitches2 = () => {
        const switchComponents = (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                <Text style={{ color: '#d7dbdd' }}>Dark Mode</Text>
                <Toggle />
            </View>
        )

        return (
            <View>
                {switchComponents}
            </View>
        );
    }


    renderButtons = () => {

        const getAllKeys = async () => {
            //AsyncStorage.clear();
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys()
            } catch (e) {
                // read key error
            }

            console.log(keys.length);
            return keys;

            // example console.log result:
            // ['@MyApp_user', '@MyApp_key']
        }


        const switchComponents = (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}    >
                <Text style={{ color: '#d7dbdd' }}>Clean Memos</Text>

                <Button onPress={() => AsyncStorage.clear().then(console.log('clean'))} title="Clean" color="#283747" />

            </View>
        )


        return (


            <View>
                {switchComponents}
            </View>
        );

    }








    render() {
        return (
            <View style={{ flex: 1, padding: 16 * 2 }}>
                {this.renderHeader()}
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* 
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <MaterialCommunityIcons name="theme-light-dark" color={'#283747'} size={30} />
                        <Toggle />

                    </View>
                    */}

                    <View style={{}} style={styles.divider} ></View>
                    {this.renderSwitches()}
                    {this.renderSwitches2()}
                    {this.renderButtons()}
                    <View style={{}} style={styles.divider} ></View>
                    {this.renderAbout()}
                    <View style={{}} style={styles.divider} ></View>
                    {this.renderInputs()}

                </ScrollView>
            </View>
        );
    }
}

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
    input: {
        borderColor: "transparent",
        borderWidth: 0,
        borderBottomColor: "#C5CCD6",
        backgroundColor: "#FFFFFF",
    },
    editableInput: {
        fontWeight: '300',
    },
    nonEditableInput: {
        fontWeight: '500',
    },
    divider: {
        height: 0,
        margin: 16 * 2,
        borderBottomColor: '#d7dbdd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 0,
        color: '#d7dbdd',
    }
})

SettingsScreen.propTypes = {

}

SettingsScreen.defaultProps = {
}

export default SettingsScreen;