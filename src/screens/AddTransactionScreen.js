import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/actions';
import styles from '../styles/AddtransactionStyle';
import { categoryList, descriptionList } from '../constant';

const AddTransactionScreen = () => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();
    const handleAddTransaction = () => {
        if (!transactionType || !selectedDate || !amount) {
            console.log("Please fill all the fields");
            return;
        }

        const transaction = {
            category,
            description,
            transactionType,
            amount,
            date: selectedDate,
        };

        dispatch(addTransaction(transaction));
        clearFieldData();
    };

    const clearFieldData = () => {
        setCategory('');
        setDescription('');
        setSelectedDate('');
        setTransactionType('');
        setAmount('');
    };

    const handleTransactionTypeChange = (type) => {
        setTransactionType(type);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountLabel}>How Much?</Text>
                    <TextInput
                        style={styles.amountInput}
                        onChangeText={setAmount}
                        value={amount}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            mode="default"
                            data={categoryList}
                            labelField="label"
                            valueField="value"
                            placeholder="Category"
                            onChange={(item) => setCategory(item.value)}
                            value={category}
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            mode="default"
                            data={descriptionList}
                            labelField="label"
                            valueField="value"
                            placeholder="Description"
                            onChange={(item) => setDescription(item.value)}
                            value={description}
                        />
                    </View>
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity
                            style={[styles.toggleButton, transactionType === "income" ? styles.incomeButtonActive : styles.incomeButton]}
                            onPress={() => handleTransactionTypeChange("income")}
                        >
                            <Text style={styles.toggleButtonText}>Income</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.toggleButton, transactionType === "expense" ? styles.expenseButtonActive : styles.expenseButton]}
                            onPress={() => handleTransactionTypeChange("expense")}
                        >
                            <Text style={styles.toggleButtonText}>Expense</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => setCalendarOpen(!calendarOpen)}>
                        <View style={styles.datePickerContainer}>
                            {selectedDate === '' ? (
                                <Text>Pick Your Date</Text>
                            ) : (
                                <Text>{selectedDate}</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                    {calendarOpen && (
                        <Calendar
                            onDayPress={(day) => {
                                setCalendarOpen(false);
                                setSelectedDate(day.dateString);
                            }}
                            style={styles.calendar}
                        />
                    )}
                </View>
                <TouchableOpacity style={styles.continueButton} onPress={handleAddTransaction}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddTransactionScreen;
