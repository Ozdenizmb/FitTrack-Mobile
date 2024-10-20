import { StyleSheet, View, SafeAreaView, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Title, Caption, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from '../../components/EditProfile';
import AnonymousPhoto from '../../../assets/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../../redux/AuthActions';
import { getUser } from '../../api/ApiCalls';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const Profile = () => {

    const [user, setUser] = useState();
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch();

    const id = useSelector(state => state.auth.id);

    useEffect(() => {
        onLoadData();
    }, [id]);

    const onLoadData = async () => {
        try {
            const response = await getUser(id);
            setUser(response.data);
        } catch(error) {

        }
    }

    const onPressEdit = () => {
        setVisible(true);
    }

    const onCancel = () => {
        setVisible(false);
    }

    const successUpdate = () => {
        setVisible(false);
        Toast.show({
            text1: 'Profil Güncellendi',
            text2: 'Profil bilgileriniz başarıyla güncellendi.',
            type: 'success',
        });
        onLoadData();
    }

    const onPressExit = () => {
        dispatch(logoutSuccess());
    }

    if(!user) {
        return (
            <View style={styles.spinnerContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <EditProfile visible={visible} onCancel={onCancel} successUpdate={successUpdate} user={user} />

            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                    source={AnonymousPhoto}
                    size={80}
                />
                <View style={{marginLeft: 20}}>
                    <Title style={[styles.title, {
                    marginTop:15,
                    marginBottom: 5,
                    }]}>{user.firstName} {user.lastName}</Title>
                    <Caption style={styles.caption}>{user.email}</Caption>
                </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>{user.city}, {user.country}</Text>
                </View>
                <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>{user.phone}</Text>
                </View>
                <View style={styles.row}>
                <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>{user.email}</Text>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.editButton} onPress={onPressEdit}>
                    <AntDesign name="edit" size={24} color="white" />
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.exitButton} onPress={onPressExit}>
                    <Ionicons name="exit-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>4</Title>
                    <Caption>Your Training</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Favorite</Caption>
                </View>
            </View>
            <Toast />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    editButton: {
        height: 40,
        backgroundColor: '#1885d8',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitButton: {
        height: 40,
        backgroundColor: '#F44336',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})