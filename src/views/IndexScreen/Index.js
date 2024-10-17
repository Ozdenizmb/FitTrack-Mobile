import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import TrainingCategories from '../../components/TrainingCategories'
import ImageSlider from '../../components/ImageSlider'

const Index = () => {

    return (
        <ScrollView style={styles.container}>
            <SearchBar />
            <View style={styles.indexSlider}>
                <ImageSlider />
            </View>
            <TrainingCategories />
        </ScrollView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 20
    },
    indexSlider: {
        marginBottom: 30
    }
})