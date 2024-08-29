import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/DasboardStyle';
import { incomeImage, cameraImage } from '../utils/images';
import { useTranslation } from 'react-i18next';

/**
 * AccountIncomeStatus Component
 * Displays the total income with an icon.
 * 
 * @param {Object} props
 * @param {number} props.totalIncome - The total income amount.
 */
const AccountIncomeStatus = ({ totalIncome }) => {
    const {t} = useTranslation()
    return (
        <View style={styles.accountIncomeContainer}>
            <View style={styles.accountStatusRow}>
                <View style={styles.statusIconContainer}>
                    <Image style={styles.statusIcon} source={incomeImage} />
                    <Image source={cameraImage} />
                </View>
                <View style={styles.statusTextContainer}>
                    <Text style={styles.statusLabelText}>{t('income')}</Text>
                    <Text style={styles.statusAmountText}>{totalIncome}</Text>
                </View>
            </View>
        </View>
    );
};

export default AccountIncomeStatus;
