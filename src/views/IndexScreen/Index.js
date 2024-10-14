import { StyleSheet, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'

const Index = () => {

    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 10
    }
})