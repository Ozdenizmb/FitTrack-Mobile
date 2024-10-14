import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = ({ onChangeInput, onSubmitInput }) => {
    return (
        <View style={styles.backgrounStyle}>
            <AntDesign name="search1" size={30} color="black" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder='Search' onChangeText={onChangeInput} onEndEditing={onSubmitInput} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgrounStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: "center",
        borderRadius: 20
    },
    iconStyle: {
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})