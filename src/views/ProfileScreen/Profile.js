import { StyleSheet, View, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Title, Caption, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from '../../components/EditProfile';
import AnonymousPhoto from '../../../assets/profile.png';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../redux/AuthActions';

const Profile = () => {

    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch();

    const onPressEdit = () => {
        setVisible(true);
    }

    const onCancel = () => {
        setVisible(false);
    }

    const onPressExit = () => {
        dispatch(logoutSuccess());
    }

    return (
        <SafeAreaView style={styles.container}>
            <EditProfile visible={visible} onCancel={onCancel} />

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
                    }]}>Baran Özdeniz</Title>
                    <Caption style={styles.caption}>info@baranozdeniz.com</Caption>
                </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>Malatya, Turkey</Text>
                </View>
                <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>05375959569</Text>
                </View>
                <View style={styles.row}>
                <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>info@baranozdeniz.com</Text>
                </View>
            </View>

            <View>
                <Button title="Edit Profile" onPress={onPressEdit} />
                <Button title="Exit" onPress={onPressExit} color="red" />
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
})