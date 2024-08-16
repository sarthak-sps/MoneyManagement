import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/DasboardStyle";
import UpperComponent from "../component/UpperComponent";
import LowerComponent from "../component/LowerComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadTransactions } from "../function/asyncConfig";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * DashBoardScreen Component
 * Main screen component that displays the user's dashboard including account balance, recent transactions, and tab-based filters.
 */
const DashBoardScreen = () => {
  // Retrieve transactions from the Redux store
  const transactions = useSelector(state => state.transactionsReducer.transactions)

  // Local state for transactions loaded from AsyncStorage
  const [savedTransactions, setSavedTransactions] = useState([]);

  // Load transactions when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadTransactions();
      setSavedTransactions(data);
    };

    fetchData();
  }, [transactions]);

  // Calculate total income and total expenses
  const totalIncome = savedTransactions
    .filter(transaction => transaction.transactionType === 'income')
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  const totalExpense = savedTransactions
    .filter(transaction => transaction.transactionType === 'expense')
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);


  return (
    <SafeAreaView style={styles.container}>
        <UpperComponent totalIncome={totalIncome} totalExpense={totalExpense} />
        <LowerComponent transactions={transactions} savedTransactions={savedTransactions} />
    </SafeAreaView>

  )
}
export default DashBoardScreen;
