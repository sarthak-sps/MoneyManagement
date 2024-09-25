import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { backButton } from "../utils/images"


export const TopHeader = ({ navigation, title }) => {
    return (
        <View style={styles.topHeader}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DashBoard');
                }}>
                <Image
                    source={backButton}
                    style={styles.backIcon}></Image>
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    backIcon: {
        height: 24,
        width: 24,
        marginStart: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
        width: '75%',
    },
})

export default TopHeader