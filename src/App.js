import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Transactions from "./Transactions";
import Header from "./Header";
import TXNS from './transactions.json'

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.frame}>
                <Header
                    transactionType="all"
                />
                <Transactions
                />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201f1f'
    },
    frame: {
        maxWidth: 500,
        flex: 1,
        justifyContent: 'center'
    }
})

