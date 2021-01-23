import React, { Component } from "react";
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";


import { sizes } from "./colorThemes";

import { Ionicons } from '@expo/vector-icons'


const VALID_EMAIL = "joaosilgo96@gmail.com";
const VALID_PASSWORD = "Jo@og0mes";

export default class Login extends Component {
    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: [],
        loading: false,
        toggleSecure: false
    };

    handleLogin() {
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        // check with backend API or with some static data
        if (email !== VALID_EMAIL) {
            errors.push("email");
        }
        if (password !== VALID_PASSWORD) {
            errors.push("password");
        }

        this.setState({ errors, loading: false });

        if (!errors.length) {
            // navigation.navigate("Home");
            console.log("Login Sucessful")
        }
        else {
            console.log(errors);
            Alert.alert('Error', errors.toString());
        }
    }

    render() {
        const { navigation } = this.props;
        const { email, phone, number, secure, error, style, ...props } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        const { toggleSecure } = this.state;
        const isSecure = toggleSecure ? false : true;

        return (
            <KeyboardAvoidingView style={styles.login} behavior="padding">
                <View style={{ padding: sizes.base * 2 }} >
                    <Text style={{ fontSize: sizes.h1, fontWeight: 'bold', color: '#283747', }}  >Login</Text>
                    <View style={{ justifyContent: 'center' }} >


                        <View style={{ flex: 0 }} margin={sizes.base}>

                            <View style={{ flex: 0 }} >
                                <Text style={{ color: '#9DA3B4' }}>Email</Text>
                            </View>

                            <TextInput
                                style={[styles.input, styles.inputView]}
                                // secureTextEntry={false}
                                autoComplete="off"
                                contextMenuHidden={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType='email-address'
                                defaultValue={this.state.email}
                                placeholder="Email"
                                secureTextEntry
                                onChangeText={text => this.setState({ email: text })}
                                {...props}
                            />
                        </View>
                        <View style={{ flex: 0 }} margin={sizes.base}>

                            <View style={{ flex: 0 }} >
                                <Text style={{ color: '#9DA3B4' }}>Password</Text>
                            </View>

                            <TextInput
                                style={[styles.input, styles.inputView]}
                                // secureTextEntry={true}
                                placeholder="Password"
                                // caretHidden={true}

                                contextMenuHidden={true}
                                autoComplete="off"
                                autoCapitalize="none"
                                autoCorrect={false}
                                //keyboardType='visible-password'
                                defaultValue={this.state.password}
                                secureTextEntry={isSecure}
                                onChangeText={text => this.setState({ password: text })}

                                {...props}
                            /><TouchableOpacity
                                style={styles.toggle}
                                onPress={() => this.setState({ toggleSecure: !toggleSecure })}
                            >

                                <Ionicons
                                    color={'#283747'}
                                    size={sizes.font * 1.75}
                                    name={!toggleSecure ? "md-eye" : "md-eye-off"}
                                />

                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => this.handleLogin()}>
                            {loading ? (
                                <ActivityIndicator animating={true} size="small" color='#283747' />
                            ) : (
                                    <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#283747' }}  >
                                        Login
                                    </Text>
                                )}
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Text style={{ textDecorationLine: "underline", textAlign: 'center', color: '#d7dbdd', fontSize: sizes.caption }}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        //  flex: 1,
        justifyContent: "center"
    },
    inputView: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: "#C5CCD6",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: '#283747'
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
    toggle: {
        position: "absolute",
        alignItems: "flex-end",
        width: sizes.base * 2,
        height: sizes.base * 2,
        top: sizes.base,
        right: 0
    }
});