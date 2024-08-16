import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF6E5',
        flex: 1,
    },
    filterContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    dropdown: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 40,
        borderWidth: 1,
        alignItems: 'center',
        width: 130,
        height: 40,
    },
    flatListContent: {
        paddingBottom: 50,
    },
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 24,
    },
    transactionDetails: {
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'space-between',
    },
    category: {
        fontSize: 22,
    },
    description: {
        fontSize: 16,
        fontWeight: '600',
    },
    transactionAmount: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
    },
    amount: {
        fontSize: 20,
        fontWeight: '600',
    },
    time: {
        fontSize: 13,
        fontWeight: '600',
    },
});
export default styles;