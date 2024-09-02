import React from 'react';
import { View } from 'react-native';
import  { CustomTabView } from './TabView';
import styles from '../styles/DasboardStyle';

/**
 * LowerComponent Component
 * Contains the TabView component that allows filtering transactions by Today, Week, Month, and Year.
 * 
 * @param {Object} props
 * @param {Array} props.transactions - The list of transactions.
 */

const LowerComponent = ({ transactions=[] }) => {
    return (
        <View style={styles.lowerContainer}>
            <CustomTabView transactions={transactions} />
        </View>
    )
}
export default LowerComponent;