import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/DasboardStyle';

/**
 * AccountBalance Component
 * Displays the total account balance (Income - Expenses).
 * 
 * @param {Object} props
 * @param {number} props.totalIncome - The total income amount.
 * @param {number} props.totalExpense - The total expense amount.
 */
const AccountBalance = ({ totalIncome, totalExpense }) => {
    return (
        <View style={styles.accountBalanceContainer}>
            <Text style={styles.accountBalanceText}>Account Balance </Text>
            <Text style={styles.accountBalanceAmount}>{totalIncome - totalExpense}</Text>
        </View>
    );
};

export default AccountBalance;