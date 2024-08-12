import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContainer: {
        flex: 0.5,
        backgroundColor: '#FFF6E5',
        borderBottomStartRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    headerLeftText: {
        fontSize: 14,
        fontWeight: '700',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 5,
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
    profileName: {
        fontSize: 14,
        verticalAlign: 'middle',
        alignSelf: 'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    accountBalanceContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    accountBalanceText: {
        fontSize: 14,
    },
    accountBalanceAmount: {
        fontSize: 40,
        fontWeight: '500',
        color: 'black',
    },
    accountStatusContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    accountIncomeContainer: {
        backgroundColor: '#00A86B',
        width: 164,
        height: 64,
        margin: 20,
        borderRadius: 30,
        padding: 10,
    },
    accountExpensesContainer: {
        backgroundColor: '#FD3C4A',
        width: 164,
        height: 64,
        margin: 20,
        borderRadius: 30,
        padding: 10,
    },
    accountStatusRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statusIconContainer: {
        height: 48,
        width: 48,
        borderRadius: 17,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusIcon: {
        marginBottom: 2,
    },
    statusTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    statusLabelText: {
        color: 'white',
    },
    statusAmountText: {
        color: 'white',
        fontSize: 22,
    },
    lowerContainer: {
        flex: 0.5,
        backgroundColor: '#A89696',
    },
    tabViewContainer: {
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 16,
        borderColor: 'white',
        borderWidth: 1,
    },
    tabContentContainer: {
        width: '100%',
        justifyContent: 'space-between',
    },
    selectedTabItem: {
        paddingHorizontal: 15,
        backgroundColor: 'black',
        borderRadius: 10,
        color: 'white',
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
    },
    recentTransactionText: {
        fontSize: 18,
        color: 'black',
    },
    transactionItem: {
        flexDirection: 'row',
        width: 350,
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
        width: 38,
        height: 41,
        marginRight: 10,
    },
    transactionAmountText: {
        fontSize: 22,
        color: 'black',
    },
    transactionCategoryText: {
        verticalAlign: 'middle',
        fontSize: 15,
    },
});
export default styles;