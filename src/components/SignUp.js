import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const SignUp = ({ visible, onCommand, onCancel }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const {colors} = useTheme();

    const commandHandler = () => {
        const body = {
            firstName,
            lastName,
            email,
            password,
            phone,
            country,
            city
        }

        onCommand(body);
    }

    const cancelHandler = () => {
        onCancel();
    }

    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.container}>
                <Text style={styles.signUpTitle}>Sign Up</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color={colors.text} />
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                        ]}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color={colors.text} />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                        ]}
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name="phone" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                        ]}
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                        ]}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="lock" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={true}
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="globe" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Country"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                        ]}
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="map-marker-outline" color={colors.text} size={20} />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                        ]}
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={commandHandler}>
                    <Text style={styles.panelButtonTitle}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={cancelHandler}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <Toast />
        </Modal>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 150
    },
    signUpTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 20
    },
    action: {
        flexDirection: 'row',
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