import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/DasboardStyle';
import AccountBalance from './AccountBalance';
import AccountStatus from './AccountStatus';
import { appLogo } from '../utils/images'
import { daysOfWeek, monthsOfYear } from '../constant';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

/**
 * UpperComponent Component
 * Displays the current date, user profile, account balance, and account status (income & expenses).
 * 
 * @param {Object} props
 * @param {number} props.totalIncome - The total income amount.
 * @param {number} props.totalExpense - The total expense amount.
 */

const UpperComponent = ({ totalIncome, totalExpense }) => {
    // Get the current date
    const currentDate = new Date();

    // Get the day of the week
    const currentDay = daysOfWeek[currentDate.getDay()];

    // Get the date and month
    const currentDateNumber = currentDate.getDate();

    const currentMonth = monthsOfYear[currentDate.getMonth()];

    const name = useSelector(state => state.transactions.name);

    const navigation = useNavigation()
    return (
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerLeftText}>{currentDay} {currentDateNumber} </Text>
                    <Text>{currentMonth}</Text>
                </View>

                <View style={styles.profileContainer}>
                    <TouchableOpacity style={styles.imageWrapper} onPress={() => navigation.navigate('Profile')}>
                        <Image style={styles.profileImage} source={appLogo} />
                    </TouchableOpacity>
                    <Text style={styles.profileName}>{name}</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <AccountBalance totalIncome={totalIncome} totalExpense={totalExpense} />
            <AccountStatus totalIncome={totalIncome} totalExpense={totalExpense} />
        </View>
    )
}

export default UpperComponent;