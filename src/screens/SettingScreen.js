import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { lock, plus, term, faq, notification, customer, android } from '../utils/images';
import i18next, { languageResources } from "../../services/i18next";
import languageList from '../../services/languageList.json'
const SettingsScreen = () => {
    const [languageDialog, setlanguageDialog] = useState(false)
    const changeLng = (lng) => {
        i18next.changeLanguage(lng)
        setlanguageDialog(false)
    }
    const openLangDialog = (item) => {
        if (item == "Change Language") {
            setlanguageDialog(true)
        }
    }
    const optionItems = [
        { icon: lock, color: "#4A57A2", text: "Change Password" },
        { icon: notification, color: "#E09959", text: "Notifications" },
        { icon: plus, color: "#63C0C8", text: "Refer Friends & Businesses" },
        { icon: android, color: "#E063A3", text: "Change Language" },
        { icon: faq, color: "#8A6EC1", text: "FAQ" },
        { icon: customer, color: "#4ABF8A", text: "Contact us" },
        { icon: term, color: "#C08DD6", text: "Terms & Conditions" },
    ];
    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center", margin: 20 }}>
            <FlatList
                style={styles.container}
                data={optionItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.optionItem} onPress={() => openLangDialog(item.text)}>
                        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                            <Image source={item.icon} style={{ width: 20, height: 20 }} />
                        </View>
                        <Text style={styles.optionText}>{item.text}</Text>
                        <Icon name="chevron-forward" size={20} color="#C4C4C4" />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.optionContainer}
            />
            <Modal visible={languageDialog} onRequestClose={() => setlanguageDialog(false)}>
                <View style={{ justifyContent: "black", padding: 10, backgroundColor: "#6258E8" }}>
                    <FlatList
                        data={Object.keys(languageResources)}
                        renderItem={({ item }) => <TouchableOpacity onPress={() => changeLng(item)}>
                            <Text>{languageList[item].nativeName}</Text>
                        </TouchableOpacity>} />
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        margin: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    editAccountText: {
        color: '#6A70C7',
        marginTop: 5,
    },
    optionContainer: {
        marginHorizontal: 20,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    iconContainer: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
    },
});
export default SettingsScreen;