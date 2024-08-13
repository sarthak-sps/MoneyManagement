import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF6E5',
        flex: 1,
    },
    headerContainer: {
        marginVertical: 100,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'blue',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        margin: 2,
    },
    userInfo: {
        alignSelf: 'center',
    },
    usernameText: {
        fontSize: 14,
    },
    nameText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    optionsContainer: {
        backgroundColor: 'white',
        flex: 0.9,
        marginHorizontal: 10,
        borderRadius: 24,
    },
    option: {
        margin: 20,
        flexDirection: 'row',
    },
    optionText: {
        textAlignVertical: 'center',
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    divider: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
});

export default styles;