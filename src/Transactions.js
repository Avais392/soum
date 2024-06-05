import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

const Transactions = ({transactions}) => {

    return (
        <FlatList
            initialNumToRender={100}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default Transactions;

const styles = StyleSheet.create({})

