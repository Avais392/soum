import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Transactions from "./Transactions";
import Header from "./Header";
import TXNS from "./transactions.json";

const App = () => {
  const [filteredTransactions, setFilteredTransactions] = useState(TXNS);

  const filterTransactions = (type) => {
    if (type === "all") {
      setFilteredTransactions(TXNS);
    } else {
      const filtered = TXNS.filter(
        (transaction) => transaction.txnType === type
      );
      setFilteredTransactions(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.frame}>
        <Header transactionType="all" onPressBtn={filterTransactions} />
        <Transactions transactions={filteredTransactions} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201f1f",
  },
  frame: {
    maxWidth: 500,
    flex: 1,
    justifyContent: "center",
  },
});
