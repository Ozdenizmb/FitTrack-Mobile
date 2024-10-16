import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';
import React from 'react'
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const EditProfile = ({ visible, onCancel }) => {

    const {colors} = useTheme()

    const cancelHandler = () => {
        onCancel();
    }

    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.container}>
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
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={cancelHandler}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 200
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