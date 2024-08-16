import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/DasboardStyle";
import UpperComponent from "../component/UpperComponent";
import LowerComponent from "../component/LowerComponent";

/**
 * DashBoardScreen Component
 * Main screen component that displays the user's dashboard including account balance, recent transactions, and tab-based filters.
 */
const DashBoardScreen = () => {
  // Retrieve transactions from the Redux store
  const transactions = useSelector(state => state.transactionsReducer.transactions)

  // Calculate total income and total expenses
  const totalIncome = transactions
    .filter(transaction => transaction.transactionType === 'income')
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  const totalExpense = transactions
    .filter(transaction => transaction.transactionType === 'expense')
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);


  return (
    <View style={styles.container}>
      <UpperComponent totalIncome={totalIncome} totalExpense={totalExpense} />
      <LowerComponent transactions={transactions} />
    </View>
  )
}
export default DashBoardScreen;
