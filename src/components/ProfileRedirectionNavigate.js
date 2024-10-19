import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/icon.png'
import Login from './Login'
import SignUp from './SignUp'
import { login, signUp } from '../api/ApiCalls'
import { loginUserHandler } from '../redux/AuthActions'
import { useDispatch } from 'react-redux'

const ProfileRedirectionNavigate = () => {

    const [signUpVisible, setSignUpVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);

    const dispatch = useDispatch();

    const onPressLogin = () => {
        setLoginVisible(true);
    }

    const onPressSignUp = () => {
        setSignUpVisible(true);
    }

    const onCancelLogin = () => {
        setLoginVisible(false);
    }

    const onCancelSignUp = () => {
        setSignUpVisible(false);
    }

    const onCommandLogin = async (email, password) => {
        try {
            const response = await login(email, password);
            dispatch(loginUserHandler(response.data, password));
            setLoginVisible(false);
        } catch(error) {
            const errorMessage = error.response.data.title + ": " + error.response.data.detail;
            Toast.show({
                text1: 'Hatalı Giriş!',
                text2: errorMessage,
                type: 'error',
                position: 'top',
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 30
            });
        }
    }

    const onCommandSignUp = async (body) => {
        try {
            await signUp(body);
            setSignUpVisible(false);
        } catch(error) {
            const errorMessage = error.response.data.title + ": " + error.response.data.detail;
            Toast.show({
                text1: 'Kayıt Olamadınız!',
                text2: errorMessage,
                type: 'error',
                position: 'top',
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 30
            });
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Image source={icon} style={styles.image} />
                <Text style={styles.mainTitle}>Click on the Login button to log in.</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => onPressLogin()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text style={styles.label}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => onPressSignUp()}>
                        <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Login visible={loginVisible} onCommand={(email, password) => onCommandLogin(email, password)} onCancel={onCancelLogin} />
                <SignUp visible={signUpVisible} onCommand={(body) => onCommandSignUp(body)} onCancel={onCancelSignUp} />
            </View>
        </View>
    )
}

export default ProfileRedirectionNavigate

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 10
    },
    mainTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    loginButton: {
        marginTop: 60,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#007AFF',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    signUpContainer: {
        flexDirection: 'row'
    },
    label: {
        fontSize: 16,
        color: 'gray',
        marginRight: 5
    },
    link: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline'
    }
})