import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/DasboardStyle';
import { expenseImage } from '../utils/images';
import { useTranslation } from 'react-i18next';

/**
 * AccountExpensesStatus Component
 * Displays the total expenses with an icon.
 * 
 * @param {Object} props
 * @param {number} props.totalExpense - The total expense amount.
 */
const AccountExpensesStatus = ({ totalExpense }) => {
    const {t} = useTranslation()
    return (
        <View style={styles.accountExpensesContainer}>
            <View style={styles.accountStatusRow}>
                <View style={styles.statusIconContainer}>
                    <Image style={styles.statusIcon} source={expenseImage} />
                </View>
                <View style={styles.statusTextContainer}>
                    <Text style={styles.statusLabelText}>{t('expense')}</Text>
                    <Text style={styles.statusAmountText}>{totalExpense}</Text>
                </View>
            </View>
        </View>
    );
};

export default AccountExpensesStatus;
