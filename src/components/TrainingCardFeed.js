import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import TrainingCard from './TrainingCard';
import { useNavigation } from '@react-navigation/native'

const TrainingCardFeed = ({ category, data }) => {

    const navigation = useNavigation();

    const filteredData = data.filter(item => item.category === category);

    const onPressTouchableOpacity = (itemId) => {
        navigation.navigate('TrainingDetailScreen', {id: itemId})
    }

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{category}</Text>
                <TouchableOpacity style={styles.showAllContainer}>
                    <Text style={styles.showAllText}>SHOW ALL</Text>
                    <AntDesign name="right" size={24} color="#1885d8" />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList data={filteredData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={() => onPressTouchableOpacity(item.id)}>
                            <TrainingCard data={item} style={styles.trainingCard} />
                        </TouchableOpacity>
                    )
                }}/>
            </View>
        </View>
    )
}

export default TrainingCardFeed

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        color: 'gray',
        fontSize: 18
    },
    showAllContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    showAllText: {
        color: '#1885d8',
        fontSize: 18
    },
})