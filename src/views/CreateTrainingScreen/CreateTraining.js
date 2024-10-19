import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';
import { createTraining } from '../../api/ApiCalls';

const categories = [
    { id: 1, label: 'NUTRITION COURSE' },
    { id: 2, label: 'NO EQUIPMENT' },
    { id: 3, label: '30 MINUTES OR LESS' },
    { id: 4, label: 'FULL BODY' },
    { id: 5, label: 'YOGA' },
    { id: 6, label: 'BEGINNER FRIENDLY' },
    { id: 7, label: 'STRENGTH TRAINING' },
    { id: 8, label: 'CARDIO' },
    { id: 9, label: 'HIGH INTENSITY INTERVAL TRAINING' },
    { id: 10, label: 'BODYWEIGHT' },
    { id: 11, label: 'PILATES' },
    { id: 12, label: 'MOBILITY' },
    { id: 13, label: 'STRETCHING' },
    { id: 14, label: 'CORE WORKOUT' },
    { id: 15, label: 'BALANCE TRAINING' },
    { id: 16, label: 'ENDURANCE' },
    { id: 17, label: 'LOW IMPACT' },
    { id: 18, label: 'KETTLEBELL WORKOUT' },
    { id: 19, label: 'DUMBBELL WORKOUT' },
    { id: 20, label: 'OUTDOOR WORKOUT' },
];

const difficulties = [
    { id: 1, label: 'FOR BABIES' },
    { id: 2, label: 'EASY' },
    { id: 3, label: 'MEDIUM' },
    { id: 4, label: 'HARD' },
    { id: 5, label: 'IMPRESSIVE' },
    { id: 6, label: 'MASTER' }
];

const CreateTraining = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const id = useSelector(state => state.auth.id);

    const {colors} = useTheme();

    const commandHandler = async () => {
        const body = {
            userId: id,
            title,
            description,
            duration,
            difficulty,
            category
        }

        const formData = new FormData();
        formData.append('trainingCreateDto', {
            "string": JSON.stringify(body),
            type: 'application/json'
        });
        formData.append('image', {
            uri: image,
            type: 'image/jpeg',
            name: 'image.jpg'
        });

        try {
            console.log(formData);
            await createTraining(formData);
            Toast.show({
                text1: 'Paylaşıldı!',
                text2: 'İçeriğiniz Başarıyla Paylaşıldı.',
                type: 'success',
            });
            setTitle("");
            setDescription("");
            setDuration("");
            setCategory("");
            setDifficulty("");
            setImage(null);
        } catch(error) {
            const errorMessage = error.response.data.title + ": " + error.response.data.detail;
            Toast.show({
                text1: 'Paylaşım Yapılamadı!',
                text2: errorMessage,
                type: 'error',
                position: 'top',
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 30
            });
        }
    }

    const chooseImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
            Toast.show({
                text1: 'Access denied!',
                type: 'error',
                position: 'top',
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 30
            });
            return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (result.canceled) {
            Toast.show({
                text1: 'User cancelled image picker!',
                type: 'error',
                position: 'top',
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 30
            });
        } else {
            console.log(result.uri);
            setImage(result.assets[0].uri);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Share Training</Text>
            <TouchableOpacity onPress={chooseImage} style={styles.imagePicker}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Text style={styles.imagePlaceholder}>Choose Image</Text>
                )}
            </TouchableOpacity>
            <View style={styles.action}>
                <MaterialIcons name="title" size={20} color={colors.text} />
                <TextInput
                    placeholder="Title"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: colors.text,
                    },
                    ]}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>
            <View style={styles.action}>
                <MaterialIcons name="description" size={20} color={colors.text} />
                <TextInput
                    placeholder="Description"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                    ]}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
            <View style={styles.action}>
                <Ionicons name="time-sharp" size={20} color={colors.text} />
                <TextInput
                    placeholder="Duration"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                    ]}
                    value={duration}
                    onChangeText={(text) => setDuration(text)}
                />
            </View>
            <View style={styles.action}>
                <Feather name="trending-up" size={20} color={colors.text} />
                <Picker
                    selectedValue={difficulty}
                    style={[styles.picker, { color: colors.text }]}
                    onValueChange={(itemValue) => setDifficulty(itemValue)}
                >
                    <Picker.Item label="Select Difficulty" value="" />
                    {difficulties.map(difficulty => (
                        <Picker.Item key={difficulty.id} label={difficulty.label} value={difficulty.id} />
                    ))}
                </Picker>
            </View>
            <View style={styles.action}>
                <MaterialIcons name="category" size={20} color={colors.text} />
                <Picker
                    selectedValue={category}
                    style={[styles.picker, { color: colors.text }]}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                >
                    <Picker.Item label="Select Category" value="" />
                    {categories.map(category => (
                        <Picker.Item key={category.id} label={category.label} value={category.id} />
                    ))}
                </Picker>
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={commandHandler}>
                <Text style={styles.panelButtonTitle}>Share</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateTraining

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 50
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 20
    },
    imagePicker: {
        width: '100%',
        height: 200,
        borderColor: '#f2f2f2',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    imagePlaceholder: {
        color: '#666666',
        fontSize: 16,
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    picker: {
        flex: 1,
        marginLeft: 10,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#1885d8',
        alignItems: 'center',
        marginTop: 10,
    },
    cancelButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
})