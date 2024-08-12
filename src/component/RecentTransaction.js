import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import styles from '../styles/DasboardStyle';

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
                return require('../../assets/images/incomeArrow.png');
            case 'expense':
                return require('../../assets/images/expense.png');
        }
    }

    return (
        <View>
            <FlatList
                data={filteredTransactions}
                renderItem={({ item }) => (
                    <View style={styles.transactionItem}>
                        <View style={styles.transactionItemLeft}>
                            <Image source={getCategoryImage(item.transactionType)} style={styles.transactionCategoryIcon} />
                            <Image source={require('../../assets/images/bi_currency-rupee.png')} />
                            <Text style={styles.transactionAmountText}>{`${item.amount}`}</Text>
                        </View>
                        <Text style={styles.transactionCategoryText}>{item.category}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default RecentTransaction;
