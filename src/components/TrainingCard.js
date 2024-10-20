import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TrainingCard = ({ data }) => {

    const getImageSource = () => {
        if(data.image && data.image.length > 0) {
            const mimeType = data.image.startsWith('/9j') ? 'image/jpeg' : 'image/png';
            return { uri: `data:${mimeType};base64,${data.image}` };
        }
        const randomNumber = Math.floor(Math.random() * 100);
        return { uri: `https://picsum.photos/200/300?random=${randomNumber}` };
    }

    return (
        <View style={styles.card}>
            <Image source={getImageSource()} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.duration}>{data.difficulty} - Duration: {data.duration}</Text>
        </View>
    )
}

export default TrainingCard

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
        marginRight: 15
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 8,
        marginBottom: 5
    },
    title: {
      fontSize: 15
    },
    duration: {
        color: 'gray'
    }
})