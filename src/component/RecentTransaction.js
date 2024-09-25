import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/DasboardStyle';
import { incomeImage, ruppeSymbol, expenseArrow, downArrow, upArrow, } from '../utils/images';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

/**
 * RecentTransaction Component
 * Renders the list of filtered transactions based on the selected tab.
 * 
 * @param {Object} props
 * @param {Array} props.filteredTransactions - The list of filtered transactions.
 */
const RecentTransaction = ({ filteredTransactions }) => {
    const getCategoryImage = (category) => {
        switch (category) {
            case 'income':
                return upArrow;
            case 'expense':
                return downArrow;
        }
    }
    const { t } = useTranslation();
    const navigation = useNavigation()
    const recentTransactions = filteredTransactions.reverse().slice(0, 3);
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.recentTransactionHeader}>
                <Text style={styles.recentTransactionText}>{t('recent-transaction')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
                    <Text style={styles.recentTransactionText}>{t('view-all')}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={recentTransactions}
                renderItem={({ item }) => (
                    <View style={[styles.transactionItem, { opacity: item.transactionType == 'income' ? 0.5 : 1 }]}>
                        <View style={styles.transactionItemLeft}>
                            <Image source={getCategoryImage(item.transactionType)} style={styles.transactionCategoryIcon} tintColor={item.transactionType == 'income' ? "green" : "red"} />
                            <Image source={ruppeSymbol} />
                            <Text style={styles.transactionAmountText}>{`${item.amount}`}</Text>
                        </View>
                        <Text style={styles.transactionCategoryText}>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default RecentTransaction;
