import React from 'react';
import { View } from 'react-native';
import TabView from './TabView';
import styles from '../styles/DasboardStyle';

/**
 * LowerComponent Component
 * Contains the TabView component that allows filtering transactions by Today, Week, Month, and Year.
 * 
 * @param {Object} props
 * @param {Array} props.transactions - The list of transactions.
 */

const LowerComponent = ({ transactions, savedTransactions }) => {
    return (
        <View style={styles.lowerContainer}>
            <TabView transactions={transactions} savedTransactions={savedTransactions} />
        </View>
    )
}
export default LowerComponent;