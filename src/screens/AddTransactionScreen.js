import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { Calendar } from 'react-native-calendars'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

const AddTransactionScreen = () => {
    const [category, setCategory] = useState(null)
    const [description, setDescription] = useState(null)
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(" ");
    const data = [{ label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },]
    useEffect(() => {
       setSelectedDate(" ");
      }, []);
    return (
        <ScrollView style={{ backgroundColor: '#FFF6E5', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{}}>
                    <Text style={{ flex: 0.3, fontSize: 20, marginTop: 50, marginHorizontal: 10 }}>How Much?</Text>
                    <Text style={{ fontSize: 40, color: 'black' }}> ₹ 55698</Text>
                </View>
                <View style={{ flex: 0.7, backgroundColor: 'white', flex: 0.8, borderTopStartRadius: 50, borderTopEndRadius: 50, paddingVertical: 45, marginTop: 30 }}>
                    <View style={{ marginHorizontal: 20, marginTop: 50, borderWidth: 1, borderRadius: 16, paddingHorizontal: 16, paddingVertical: 20 }}>
                        <Dropdown
                            mode='default'
                            data={data}
                            labelField={"label"}
                            placeholder='Category'
                            onChange={item => {
                                setCategory(item.value);
                            }}
                            value={category}
                            valueField="value"
                        >
                        </Dropdown>
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 40, borderWidth: 1, borderRadius: 16, paddingHorizontal: 16, paddingVertical: 20 }}>
                        <Dropdown
                            mode='default'
                            data={data}
                            labelField={"label"}
                            placeholder='Description'
                            onChange={item => {
                                setDescription(item.value);
                            }}
                            value={description}
                            valueField="value"
                        >
                        </Dropdown>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', width: '60%', marginTop: 20 }}>
                        <View style={{ backgroundColor: 'green', paddingHorizontal: 15, borderRadius: 10, }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Income</Text>
                        </View>
                        <View style={{ backgroundColor: 'red', paddingHorizontal: 15, borderRadius: 10, }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Expense</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setCalendarOpen(!calendarOpen)}>
                        <View style={{ marginHorizontal: 20, marginTop: 40, borderWidth: 1, borderRadius: 16, paddingHorizontal: 16, paddingVertical: 20 }}>
                            {selectedDate == null ? (
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
                                setSelectedDate(day.dateString)
                            }}
                            style={{ marginHorizontal: 20, marginTop: 20 }}
                        />
                    )}
                </View>
                <TouchableOpacity style={{ marginHorizontal: 40, borderRadius: 16, padding: 15, backgroundColor: '#7F3DFF', marginTop: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 600, color: 'white' }}> Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>


    )
}

export default AddTransactionScreen

const styles = StyleSheet.create({})