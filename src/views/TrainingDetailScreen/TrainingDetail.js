import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTraining } from '../../api/ApiCalls';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TrainingDetail = ({ route }) => {

    const [data, setData] = useState();

    const { id } = route.params;

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
            const response = await getTraining(id);
            setData(response.data);
            console.log(response.data);
        } catch(error) {

        }
    }

    const getImageSource = () => {
        if(data.image && data.image.length > 0) {
            const base64Image = Buffer.from(data.image, 'binary').toString('base64');
            return { uri: `data:image/png;base64,${base64Image}` };
        }
        const randomNumber = Math.floor(Math.random() * 100);
        return { uri: `https://picsum.photos/200/300?random=${randomNumber}` };
    }

    if(!data) {
        return (
            <View style={styles.spinnerContainer}>
                <ActivityIndicator size="large" color="#1885d8" />
            </View>
        );
    }

    return (
        <View>
            <View style={styles.container}>
                <Image source={getImageSource()} style={styles.image} />
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.secondaryContainer}>
                    <FontAwesome name="comment" size={24} color="#1885d8" style={styles.commentIcon} />
                    <Text>{Math.floor(Math.random()*100)} Comments</Text>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text>Duration: {data.duration}</Text>
                </View>
                <View style={styles.detailButtonContainer}>
                    <TouchableOpacity style={styles.detailButton}>
                        <Feather name="bell" size={48} color="#1885d8" />
                        <Text style={styles.detailButtonText}>Reminder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailButton}>
                    <AntDesign name="checkcircle" size={48} color="#1885d8" />
                        <Text style={styles.detailButtonText}>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailButton}>
                        <MaterialIcons name="downloading" size={48} color="#1885d8" />
                        <Text style={styles.detailButtonText}>Download</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailButton}>
                        <AntDesign name="upload" size={48} color="#1885d8" />
                        <Text style={styles.detailButtonText}>Reminder</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descMain}>
                <Text style={styles.descMainTitle}>WORKOUT</Text>
                <Text style={styles.descContent}>{data.title} - {data.category}</Text>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.descContent}>{data.description}</Text>
                <Text style={styles.descTitle}>Duration</Text>
                <Text style={styles.descContent}>{data.duration}</Text>
                <Text style={styles.descTitle}>Date</Text>
                <Text style={styles.descContent}>{data.updatedDate}</Text>
                <Text style={styles.descTitle}>Created by This User ID</Text>
                <Text style={styles.descContent}>{data.userId}</Text>
            </View>
            <View style={styles.mainBorder}></View>
            <View>
                <Text style={styles.commentsTitle}>Comments</Text>
            </View>
        </View>
    )
}

export default TrainingDetail

const styles = StyleSheet.create({
    container: {
        margin: 30,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    secondaryContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentIcon: {
        marginRight: 5
    },
    detailButtonContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    detailButton: {
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        padding: 10,
        marginRight: 10,
    },
    detailButtonText: {
        fontWeight: 'bold'
    },
    descMain: {
        marginHorizontal: 20
    },
    descMainTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    descTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    descContent: {
        marginBottom: 10
    },
    mainBorder: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'lightgray',
        alignSelf: 'center',
        marginVertical: 10
    },
    commentsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    }
})