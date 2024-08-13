import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/DasboardStyle';
import AccountBalance from './AccountBalance';
import AccountStatus from './AccountStatus';
import { appLogo } from '../utils/images'
import { daysOfWeek, monthsOfYear } from '../constant';

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


    return (
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerLeftText}>{currentDay} {currentDateNumber} </Text>
                    <Text>{currentMonth}</Text>
                </View>

                <View style={styles.profileContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.profileImage} source={appLogo} />
                    </View>
                    <Text style={styles.profileName}>Sarthak</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <AccountBalance totalIncome={totalIncome} totalExpense={totalExpense} />
            <AccountStatus totalIncome={totalIncome} totalExpense={totalExpense} />
        </View>
    )
}

export default UpperComponent;