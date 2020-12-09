import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';


function ResultsShowScreen({ navigation }) {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');



    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    }
    useEffect(() => {
        getResult(id);

    }, [])

    if (!result) {
        return null;
    }

    return (

        <View style={styles.containerStyle}>
            {console.log(result)}
            <Text style={styles.titleStyle}>{result.name}</Text>
            <FlatList
                style={styles.flatListStyle}
                horizontal
                data={result.photos}
                showsHorizontalScrollIndicator={false}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (<Image style={styles.imageStyle} source={{ uri: item }} />)
                }}
            />
            <View style={styles.contactStyle}>
                <Text style={styles.textStyle}>{result.name} is {!result.is_closed ? "Open" : "Closed"}</Text>
                <Text style={styles.textStyle}>Phone : {result.display_phone}</Text>
                <View style={styles.addressStyle}>
                    <Text style={styles.textStyle}>Address : </Text>
                    <FlatList
                        data={result.location.display_address}
                        keyExtractor={item => item}
                        renderItem={({ item }) => {
                            return <Text>{item}</Text>
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        alignSelf: 'center'
    },
    imageStyle: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginTop: 5,
        marginBottom: 50,
        marginHorizontal: 10,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactStyle: {
        marginLeft: 20,
        marginTop: 10,

    },
    addressStyle: {
        flexDirection: "row",
    }
});

export default ResultsShowScreen;