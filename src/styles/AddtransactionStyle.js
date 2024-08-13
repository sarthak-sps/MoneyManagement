import { StyleSheet } from "react-native";

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
export default styles;