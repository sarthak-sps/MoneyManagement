import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/actions';

const AddTransactionScreen = () => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();

    const categoryList = [
        { label: 'Shopping', value: 'shopping' },
        { label: 'Salary', value: 'salary' },
        { label: 'Food', value: 'food' },
        { label: 'Outing', value: 'outing' }
    ];

    const descriptionList = [
        { label: 'Buy some grocery', value: 'Buy some grocery' },
        { label: 'Arabian hut', value: 'Arabian hut' },
        { label: 'Salary for August', value: 'Salary for August' },
        { label: 'Outing', value: 'outing' }
    ];

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF6E5',
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
    amountContainer: {
        marginHorizontal: 10,
        marginTop: 50,
    },
    amountLabel: {
        fontSize: 20,
    },
    amountInput: {
        fontSize: 40,
        color: 'black',
    },
    formContainer: {
        backgroundColor: 'white',
        flex: 0.8,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        paddingVertical: 45,
        marginTop: 30,
    },
    dropdownContainer: {
        marginHorizontal: 20,
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 20,
    },
    toggleButton: {
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    incomeButton: {
        backgroundColor: 'green',
    },
    incomeButtonActive: {
        backgroundColor: '#006400',
    },
    expenseButton: {
        backgroundColor: 'red',
    },
    expenseButtonActive: {
        backgroundColor: '#8B0000',
    },
    toggleButtonText: {
        fontSize: 20,
        color: 'white',
    },
    datePickerContainer: {
        marginHorizontal: 20,
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    calendar: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    continueButton: {
        marginHorizontal: 40,
        borderRadius: 16,
        padding: 15,
        backgroundColor: '#7F3DFF',
        marginTop: 30,
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});
