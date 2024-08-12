import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/DasboardStyle';

/**
 * AccountExpensesStatus Component
 * Displays the total expenses with an icon.
 * 
 * @param {Object} props
 * @param {number} props.totalExpense - The total expense amount.
 */
const AccountExpensesStatus = ({ totalExpense }) => {
    return (
        <View style={styles.accountExpensesContainer}>
            <View style={styles.accountStatusRow}>
                <View style={styles.statusIconContainer}>
                    <Image style={styles.statusIcon} source={require('../../assets/images/expense.png')} />
                </View>
                <View style={styles.statusTextContainer}>
                    <Text style={styles.statusLabelText}>Expenses</Text>
                    <Text style={styles.statusAmountText}>{totalExpense}</Text>
                </View>
            </View>
        </View>
    );
};

export default AccountExpensesStatus;
