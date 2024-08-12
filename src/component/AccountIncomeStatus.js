import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/DasboardStyle';

/**
 * AccountIncomeStatus Component
 * Displays the total income with an icon.
 * 
 * @param {Object} props
 * @param {number} props.totalIncome - The total income amount.
 */
const AccountIncomeStatus = ({ totalIncome }) => {
    return (
        <View style={styles.accountIncomeContainer}>
            <View style={styles.accountStatusRow}>
                <View style={styles.statusIconContainer}>
                    <Image style={styles.statusIcon} source={require('../../assets/images/incomeArrow.png')} />
                    <Image source={require('../../assets/images/camera.png')} />
                </View>
                <View style={styles.statusTextContainer}>
                    <Text style={styles.statusLabelText}>Income</Text>
                    <Text style={styles.statusAmountText}>{totalIncome}</Text>
                </View>
            </View>
        </View>
    );
};

export default AccountIncomeStatus;
