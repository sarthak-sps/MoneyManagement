import React, { useTransition } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/DasboardStyle';
import { useTranslation } from 'react-i18next';

/**
 * AccountBalance Component
 * Displays the total account balance (Income - Expenses).
 * 
 * @param {Object} props
 * @param {number} props.totalIncome - The total income amount.
 * @param {number} props.totalExpense - The total expense amount.
 */
const AccountBalance = ({ totalIncome, totalExpense }) => {
    const { t } = useTranslation();
    return (
        <View style={styles.accountBalanceContainer}>
            <Text style={styles.accountBalanceText}>{t("account-balance")} </Text>
            <Text style={styles.accountBalanceAmount}>{totalIncome - totalExpense}</Text>
        </View>
    );
};

export default AccountBalance;