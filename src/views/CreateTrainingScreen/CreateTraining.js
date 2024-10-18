import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const CreateTraining = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const email = useSelector(state => state.auth.email);
    
    return (
        <View style={styles.container}>
            <Text>CreateTraining</Text>
            <Text>{email}</Text>
        </View>
    )
}

export default CreateTraining

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 10
    }
})