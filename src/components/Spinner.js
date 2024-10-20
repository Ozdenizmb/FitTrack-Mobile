import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spinner = ({ visible }) => {
    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.spinnerContainer}>
                <Text style={styles.spinnerText}>FITTRACK</Text>
                <ActivityIndicator size="large" color="#1885d8" />
            </View>
        </Modal>
    )
}

export default Spinner

const styles = StyleSheet.create({
    spinnerText: {
        fontSize: 35,
        color: "#1885d8"
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})