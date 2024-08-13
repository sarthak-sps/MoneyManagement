import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginBottom: 20,
        backgroundColor: '#FFF6E5'
    },
    progressBarContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        height: 50,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width * 0.3,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
        marginTop: 6
    },
    label: {
        fontSize: 16,
        color: '#212325'
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    incomeText: {
        color: '#00A86B', // Green for income
    },
    expenseText: {
        color: '#FD3C4A', // Red for expense
    },
});
export default styles;