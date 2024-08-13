import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF6E5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    dropdown: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        borderRadius: 40,
        borderWidth: 2,
        alignItems: 'center',
        width: 130,
        height: 40,
        borderColor: '#F1F1FA',
        backgroundColor: '#FFF',
    },
    dropdownIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    pieContainer: {
        height: 190,
        width: 190,
        borderRadius: 95,
        marginVertical: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    totalAmount: {
        fontSize: 25,
        fontWeight: '700',
        position: 'absolute',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    toggleButtonContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 5,
        marginRight: 5,
    },
    expenseButton: {
        backgroundColor: '#FD3C4A',
        color: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        textAlign: 'center',
    },
    incomeButton: {
        backgroundColor: '#FFF',
        color: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        textAlign: 'center',
    },
    categoriesContainer: {
        marginTop: 20,
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    categoryIndicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 10,
    },
    categoryLabel: {
        flex: 1,
        fontSize: 16,
    },
    categoryAmount: {
        fontSize: 16,
        color: '#FD3C4A',
    },
});
export default styles;
