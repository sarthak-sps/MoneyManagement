import { useState } from "react"
import { Button, Modal, View, Text } from "react-native"
import styles from "../styles/AlertDialogStyle"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { logout } from "../redux/actions"

const LogoutDialog = ({ showDialog, setShowDialog }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleLogout = () => {
        setShowDialog(false)
        dispatch(logout()); // Dispatch the logout thunk
        navigation.navigate('Login'); // Navigate to the login screen
    };

    return (
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={showDialog}
                onRequestClose={() => {
                    setShowDialog(!showDialog);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure you want to logout?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Button title="Yes" onPress={handleLogout} />
                            <Button title="No" onPress={() => setShowDialog(false)} />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const SingleButtonDialog = ({ showDialog, setShowDialog, dialogMessage }) => {

    return (
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={showDialog}
                onRequestClose={() => {
                    setShowDialog(!showDialog);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{dialogMessage}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                            <Button title="OK" onPress={() => setShowDialog(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export { LogoutDialog, SingleButtonDialog };