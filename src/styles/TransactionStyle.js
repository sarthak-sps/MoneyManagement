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
        marginStart: 20,
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
        backgroundColor: '#FCFCFC',
        marginHorizontal: 20,
        marginTop:30,
        borderRadius: 24,
    },
    transactionDetails: {
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'space-between',
    },
    category: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter",
        color: "#292B2D"
    },
    descriptionAndTime: {
        fontSize: 13,
        fontWeight: '500',
        color: "#91919F"
    },
    transactionAmount: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
    },
    amount: {
        fontSize: 16,
        fontWeight: '600',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: "black",
        fontFamily: "Inter",
        fontWeight: '500'
    }
});
export default styles;