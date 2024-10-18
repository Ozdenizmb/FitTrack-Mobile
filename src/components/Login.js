import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Login = ({ visible, onCommand ,onCancel}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {colors} = useTheme();

    const commandHandler = () => {
        onCommand(email, password);
    }

    const cancelHandler = () => {
        onCancel();
    }

    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.container}>
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
                <TouchableOpacity style={styles.commandButton} onPress={commandHandler}>
                    <Text style={styles.panelButtonTitle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={cancelHandler}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 300
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