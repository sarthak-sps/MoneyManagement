import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../styles/ProgressStyle';


const ProgressBar = ({ transactions, selectedType }) => {
    const categories = transactions.reduce((acc, transaction) => {
        const { category, amount, transactionType } = transaction;
        if (!acc[category]) {
            acc[category] = { amount: 0, color: transactionType === 'income' ? '#00A86B' : '#FD3C4A' };
        }
        acc[category].amount += parseFloat(amount);
        return acc;
    }, {});

    const totalAmount = Object.values(categories).reduce((acc, category) => acc + category.amount, 0);
    return (
        <ScrollView style={styles.container}>
            {Object.keys(categories).map((category, index) => (
                <View key={index} style={styles.progressBarContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.labelContainer}>
                            <View style={[styles.circle, { backgroundColor: categories[category].color }]} />
                            <Text style={styles.label}>{category}</Text>
                        </View>
                        <Text
                            style={[
                                styles.amount,
                                selectedType === 'income' ? styles.incomeText : styles.expenseText
                            ]}
                        >
                            {selectedType === 'income' ? `+ ₹${categories[category].amount.toFixed(2)}` : `- ₹${categories[category].amount.toFixed(2)}`}
                        </Text>
                    </View>
                    <Progress.Bar
                        progress={categories[category].amount / totalAmount}
                        width={Dimensions.get('window').width - 40}
                        color={categories[category].color}
                        unfilledColor="#F1F1FA"
                        borderWidth={0}
                        height={12}
                        borderRadius={5}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default ProgressBar