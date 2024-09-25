import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Touchable, useWindowDimensions } from 'react-native';
import RecentTransaction from './RecentTransaction';
import styles from '../styles/DasboardStyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'
import { TabView, SceneMap } from 'react-native-tab-view';

/**
 * TabView Component
 * Displays tabs for filtering transactions by Today, Week, Month, and Year. 
 * Filters and displays transactions based on the selected tab.
 * 
 * @param {Object} props
 * @param {Array} props.transactions - The list of transactions.
 */
// const TabView = ({ transactions }) => {
//     const navigation = useNavigation();
//     const { t } = useTranslation();
//     const [selectedTab, setSelectedTab] = useState(t('tabdata')[0]);
//     const [filteredTransactions, setFilteredTransactions] = useState([]);

//     const currentDate = new Date();
//     const todayDate = currentDate.toISOString().split('T')[0];

//     const filterListByTab = (tab) => {
//         switch (tab) {
//             case t('today'):
//                 return transactions.filter(transaction => transaction.date === todayDate);
//             case t('week'):
//                 const startOfWeek = new Date(currentDate);
//                 startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
//                 const endOfWeek = new Date(startOfWeek);
//                 endOfWeek.setDate(startOfWeek.getDate() + 6);
//                 return transactions.filter(transaction => new Date(transaction.date) >= startOfWeek && new Date(transaction.date) <= endOfWeek);
//             case t('month'):
//                 return transactions.filter(transaction => new Date(transaction.date).getMonth() === currentDate.getMonth() && new Date(transaction.date).getFullYear() === currentDate.getFullYear());
//             case t('year'):
//                 return transactions.filter(transaction => new Date(transaction.date).getFullYear() === currentDate.getFullYear());
//             default:
//                 return transactions;
//         }
//     };

//     const handleTabPress = (tab) => {
//         setSelectedTab(tab);
//         const filtered = filterListByTab(tab);
//         setFilteredTransactions(filtered);
//     };

//     useEffect(() => {
//         const initialFilteredTransactions = filterListByTab(selectedTab);
//         setFilteredTransactions(initialFilteredTransactions);
//     }, [transactions, selectedTab]);
//  const tabdata = [t('today'), t('week'),t('month'),t('year')]
//     return (
//         <View>
//             <View style={styles.tabViewContainer}>
//                 <FlatList
//                     data={tabdata}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity
//                             style={[
//                                 styles.tabItem,
//                                 item === selectedTab && styles.selectedTabItem
//                             ]}
//                             onPress={() => handleTabPress(item)}
//                         >
//                             <Text style={item === selectedTab ? styles.selectedTabText : styles.tabText}>
//                                 {item}
//                             </Text>
//                         </TouchableOpacity>
//                     )}
//                     keyExtractor={(item) => item}
//                     contentContainerStyle={styles.tabContentContainer}
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                 />
//             </View>
//             <View style={styles.recentTransactionHeader}>
//                 <Text style={styles.recentTransactionText}>{t('recent-transaction')}</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
//                     <Text style={styles.recentTransactionText}>{t('view-all')}</Text>
//                 </TouchableOpacity>
//             </View>
//             <RecentTransaction filteredTransactions={filteredTransactions} />
//         </View>
//     );
// };

 export const CustomTabView = ({ transactions }) => {
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const { t } = useTranslation();
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
  
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'today', title: 'Today' },
        { key: 'week', title: 'Week' },
        { key: 'month', title: 'Month' },
        { key: 'year', title: 'Year' },
    ]);
    const handleTabPress = (tab) => {
        setIndex(tab);
        const filtered = filterListByTab(tab);
        setFilteredTransactions(filtered);
    };
    const renderScene = SceneMap({
        today: () => <RecentTransaction filteredTransactions={filteredTransactions} />,
        week: () => <RecentTransaction filteredTransactions={filteredTransactions} />,
        month: () => <RecentTransaction filteredTransactions={filteredTransactions} />,
        year: () => <RecentTransaction filteredTransactions={filteredTransactions} />
    });
 
    const renderTabBar = props => (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 34,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#FCFCFC',
                marginHorizontal: 10,
            }}>
            {props.navigationState.routes.map((route, i) => {
                const isFocused = props.navigationState.index === i;
                return (
                    <TouchableOpacity
                        key={i}
                        style={[styles.tabItem, isFocused ? styles.tabItemFocused : null]}
                        onPress={() => handleTabPress(i)}>
                        <Text style={isFocused ? styles.tabLabelFocused : styles.tabLabel}>
                            {route.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}></TabView>
    );
};

export default TabView;
