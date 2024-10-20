import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import TrainingCategories from '../../components/TrainingCategories'
import ImageSlider from '../../components/ImageSlider'
import Spinner from '../../components/Spinner'

const Index = () => {

    // Random Gelen Resimlerin yuklenmesi icin zaman taniyoruz
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Spinner visible={isLoading} />
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
        marginBottom: 30,
        marginTop: 10
    }
})