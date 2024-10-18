import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/icon.png'
import { useNavigation } from '@react-navigation/native'
import Login from './Login'
import SignUp from './SignUp'

const ProfileRedirectionNavigate = () => {

    const [signUpVisible, setSignUpVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);

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

    const onCommandLogin = () => {

    }

    const onCommandSignUp = () => {
        
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
                <Login visible={loginVisible} onCommand={onCommandLogin} onCancel={onCancelLogin} />
                <SignUp visible={signUpVisible} onCommand={onCommandSignUp} onCancel={onCancelSignUp} />
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