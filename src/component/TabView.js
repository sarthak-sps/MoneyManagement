import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import RecentTransaction from './RecentTransaction';
import styles from '../styles/DasboardStyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

/**
 * TabView Component
 * Displays tabs for filtering transactions by Today, Week, Month, and Year. 
 * Filters and displays transactions based on the selected tab.
 * 
 * @param {Object} props
 * @param {Array} props.transactions - The list of transactions.
 */
const TabView = ({ transactions }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState(t('tabdata')[0]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    const currentDate = new Date();
    const todayDate = currentDate.toISOString().split('T')[0];

    const filterListByTab = (tab) => {
        switch (tab) {
            case t('today'):
                return transactions.filter(transaction => transaction.date === todayDate);
            case t('week'):
                const startOfWeek = new Date(currentDate);
                startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
                const endOfWeek = new Date(startOfWeek);
                endOfWeek.setDate(startOfWeek.getDate() + 6);
                return transactions.filter(transaction => new Date(transaction.date) >= startOfWeek && new Date(transaction.date) <= endOfWeek);
            case t('month'):
                return transactions.filter(transaction => new Date(transaction.date).getMonth() === currentDate.getMonth() && new Date(transaction.date).getFullYear() === currentDate.getFullYear());
            case t('year'):
                return transactions.filter(transaction => new Date(transaction.date).getFullYear() === currentDate.getFullYear());
            default:
                return transactions;
        }
    };

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
        const filtered = filterListByTab(tab);
        setFilteredTransactions(filtered);
    };

    useEffect(() => {
        const initialFilteredTransactions = filterListByTab(selectedTab);
        setFilteredTransactions(initialFilteredTransactions);
    }, [transactions, selectedTab]);
 const tabdata = [t('today'), t('week'),t('month'),t('year')]
    return (
        <View>
            <View style={styles.tabViewContainer}>
                <FlatList
                    data={tabdata}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.tabItem,
                                item === selectedTab && styles.selectedTabItem
                            ]}
                            onPress={() => handleTabPress(item)}
                        >
                            <Text style={item === selectedTab ? styles.selectedTabText : styles.tabText}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={styles.tabContentContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.recentTransactionHeader}>
                <Text style={styles.recentTransactionText}>{t('recent-transaction')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
                    <Text style={styles.recentTransactionText}>{t('view-all')}</Text>
                </TouchableOpacity>
            </View>
            <RecentTransaction filteredTransactions={filteredTransactions} />
        </View>
    );
};

export default TabView;
