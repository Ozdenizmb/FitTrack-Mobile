import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfileRedirectionNavigate from '../../components/ProfileRedirectionNavigate'
import Profile from '../ProfileScreen/Profile'

const ProfileRedirection = () => {

    let isLogin = false;

    return (
        <View style={styles.container}>
            {isLogin ? <Profile /> : <ProfileRedirectionNavigate />}
        </View>
    )
}

export default ProfileRedirection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})