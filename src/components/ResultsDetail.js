import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

function ResultsList({ result }) {


    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating}/5 Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 10
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4 , 
        marginBottom : 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }

});

export default ResultsList;