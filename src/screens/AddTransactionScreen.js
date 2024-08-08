import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Calendar } from 'react-native-calendars';

const AddTransactionScreen = () => {
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(" ");

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    useEffect(() => {
        setSelectedDate(" ");
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountLabel}>How Much?</Text>
                    <Text style={styles.amount}>₹ 55698</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            mode='default'
                            data={data}
                            labelField="label"
                            placeholder='Category'
                            onChange={item => setCategory(item.value)}
                            value={category}
                            valueField="value"
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            mode='default'
                            data={data}
                            labelField="label"
                            placeholder='Description'
                            onChange={item => setDescription(item.value)}
                            value={description}
                            valueField="value"
                        />
                    </View>
                    <View style={styles.toggleContainer}>
                        <View style={[styles.toggleButton, styles.incomeButton]}>
                            <Text style={styles.toggleButtonText}>Income</Text>
                        </View>
                        <View style={[styles.toggleButton, styles.expenseButton]}>
                            <Text style={styles.toggleButtonText}>Expense</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setCalendarOpen(!calendarOpen)}>
                        <View style={styles.datePickerContainer}>
                            {selectedDate === " " ? (
                                <Text>Pick Your Date</Text>
                            ) : (
                                <Text>{selectedDate}</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                    {calendarOpen && (
                        <Calendar
                            onDayPress={day => {
                                setCalendarOpen(false);
                                setSelectedDate(day.dateString);
                            }}
                            style={styles.calendar}
                        />
                    )}
                </View>
                <TouchableOpacity style={styles.continueButton}>
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
    amount: {
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
    expenseButton: {
        backgroundColor: 'red',
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
