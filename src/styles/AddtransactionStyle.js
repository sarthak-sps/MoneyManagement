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
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    },
    toggleButton: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 10,
        width: '50%',
        height: 48,
        marginEnd: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    incomeButton: {
        backgroundColor: 'white',
    },
    incomeButtonActive: {
        backgroundColor: 'green',
    },
    expenseButton: {
        backgroundColor: 'white',
    },
    expenseButtonActive: {
        backgroundColor: '#8B0000',
    },
    activeToggleButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    inActiveToggleButtonText: {
        fontSize: 20,
        color: 'black',
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 18,
        color: 'red',
    },
    calendar: {
        marginTop: 20,
    },
});
export default styles;