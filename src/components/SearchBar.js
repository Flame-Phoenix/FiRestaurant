import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

function SearchBar({ term, onTermChange, onTermSubmit }) {


    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconsStyle} color="black" />
            <TextInput
                placeholder="Search"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    iconsStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
});

export default SearchBar;