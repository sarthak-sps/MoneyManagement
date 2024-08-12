import React from 'react';
import { View } from 'react-native';
import AccountIncomeStatus from './AccountIncomeStatus';
import AccountExpensesStatus from './AccountExpense';
import styles from '../styles/DasboardStyle';

/**
 * AccountStatus Component
 * Displays the status of income and expenses separately.
 * 
 * @param {Object} props
 * @param {number} props.totalIncome - The total income amount.
 * @param {number} props.totalExpense - The total expense amount.
 */
const AccountStatus = ({ totalIncome, totalExpense }) => {
    return (
        <View style={styles.accountStatusContainer}>
            <AccountIncomeStatus totalIncome={totalIncome} />
            <AccountExpensesStatus totalExpense={totalExpense} />
        </View>
    );
};

export default AccountStatus;
