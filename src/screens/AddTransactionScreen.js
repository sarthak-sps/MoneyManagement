import React, { useState } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/actions';
import styles from '../styles/AddtransactionStyle';
import { categoryList, descriptionList } from '../constant';
import { SingleButtonDialog } from '../component/AlertDialog';

const AddTransactionScreen = () => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [showDialog, setShowDialog] = useState(false)
    const [dialogMessage, setDialogMessage] = useState('')

    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();


    const validateAmount = (amount) => {
        const cleanedAmount = amount.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
        setAmount(cleanedAmount);
    };

    const handleAddTransaction = () => {
        if (!transactionType || !selectedDate || !amount || parseFloat(amount) <= 0) {
            setShowDialog(true)
            setDialogMessage("Please fill all the fields with valid values")
            console.log("Please fill all the fields");
            return;
        }

        const transaction = {
            category,
            description,
            transactionType,
            amount,
            date: selectedDate,
            time:new Date().toLocaleTimeString([], {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })
          
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
                        onChangeText={validateAmount}
                        value={amount}
                        keyboardType="numeric"
                        placeholder='Enter Amount'
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
                            <Text style={[transactionType === "income" ? styles.activeToggleButtonText : styles.inActiveToggleButtonText]}>Income</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.toggleButton, transactionType === "expense" ? styles.expenseButtonActive : styles.expenseButton]}
                            onPress={() => handleTransactionTypeChange("expense")}
                        >
                            <Text style={[transactionType === "expense" ? styles.activeToggleButtonText : styles.inActiveToggleButtonText]}>Expense</Text>
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
                    <Modal
                        transparent={true}
                        visible={calendarOpen}
                        animationType="none"
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContainer}>
                                <TouchableOpacity style={styles.closeButton} onPress={() => setCalendarOpen(false)}>
                                    <Text style={styles.closeButtonText}>X</Text>
                                </TouchableOpacity>
                                <Calendar
                                    onDayPress={(day) => {
                                        setCalendarOpen(false);
                                        setSelectedDate(day.dateString);
                                    }}
                                    style={styles.calendar}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={styles.continueButton} onPress={handleAddTransaction}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
                {showDialog && <SingleButtonDialog showDialog={showDialog} setShowDialog={setShowDialog} dialogMessage={dialogMessage} />}
            </View>
        </ScrollView>
    );
};

export default AddTransactionScreen;
