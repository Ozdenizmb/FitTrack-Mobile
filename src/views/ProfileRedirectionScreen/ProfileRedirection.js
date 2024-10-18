import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProfileRedirectionNavigate from '../../components/ProfileRedirectionNavigate'
import Profile from '../ProfileScreen/Profile'
import { useSelector } from 'react-redux'

const ProfileRedirection = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <View style={styles.container}>
            {isLoggedIn ? <Profile /> : <ProfileRedirectionNavigate />}
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