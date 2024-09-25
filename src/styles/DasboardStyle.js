import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A89696"
    },
    upperContainer: {
        flex: 0.5,
        backgroundColor: '#FFF6E5',
        borderBottomStartRadius: 32,
        borderBottomRightRadius: 32,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    },
    headerText: {
        textTransform: "capitalize",
        fontSize: 14,
        fontWeight: '400',
        color: "#0E0000",
        fontFamily: "Inter",
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 5,
        alignItems: "center"
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        margin: 2,
    },
    imageWrapper: {
        width: 45,
        height: 45,
        borderRadius: 23,
        borderColor: 'blue',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    divider: {
        borderBottomColor: '#525252',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    accountBalanceContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    accountBalanceText: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter",
        color: "#91919F"
    },
    accountBalanceAmount: {
        fontSize: 40,
        fontWeight: '600',
        color: '#161719',
        alignSelf: 'center'
    },
    accountStatusContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    accountIncomeContainer: {
        flex: 1,
        backgroundColor: '#00A86B',
        height: 80,
        borderRadius: 28,
        marginStart: 10,
        marginEnd: 5,
        justifyContent: "center"
    },
    accountExpensesContainer: {
        flex: 1,
        backgroundColor: '#FD3C4A',
        height: 80,
        borderRadius: 28,
        marginStart: 5,
        marginEnd: 10,
        justifyContent: "center"
    },
    accountStatusRow: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: "flex-start",
        marginStart: 20

    },
    statusIconContainer: {
        height: 48,
        width: 48,
        borderRadius: 17,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10
    },
    statusIcon: {
        marginBottom: 2,
    },
    statusTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    statusLabelText: {
        fontWeight: "500",
        fontSize: 14,
        color: "#FCFCFC",
        fontFamily: "Cochin"
    },
    statusAmountText: {
        color: '#FCFCFC',
        fontSize: 22,
        fontWeight: "600",
        fontFamily: "Inter"
    },
    lowerContainer: {
        flex: 0.5,
        backgroundColor: '#A89696',
        marginTop: 30
    },
    tabViewContainer: {
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#A89696',
    },
    tabContentContainer: {
        width: '100%',
        justifyContent: 'space-between',
    },
    tabItem: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    selectedTabItem: {
        backgroundColor: 'black',
    },
    selectedTabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    tabText: {
        color: 'white',
        fontSize: 20,
    },
    recentTransactionHeader: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    recentTransactionText: {
        fontSize: 14,
        color: 'black',
        fontWeight: "400",
        fontFamily: "Inter",
    },
    transactionItem: {
        flexDirection: 'row',
        width: "90%",
        height: 54,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    transactionItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionCategoryIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
        tintColor: "white",

    },
    transactionAmountText: {
        fontSize: 22,
        color: 'black',
    },
    transactionCategoryText: {
        verticalAlign: 'middle',
        fontSize: 15,
        alignSelf: 'center'
    },
    tabItemFocused: {
        borderRadius: 30,
        backgroundColor: 'black',
    },
    tabLabel: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    tabLabelFocused: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
    },
});
export default styles;