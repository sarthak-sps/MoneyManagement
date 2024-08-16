import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/LoginScreenStyle";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "../redux/actions";

const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleLogin = () => {
        // Save the user information in Redux store
        dispatch(setUser({ name, email }));
        // Navigate to another screen 
        if (!name || !email || !password) {
            // If any field is empty, show a meaningful warning
            console.warn("Please complete all fields before proceeding.");
        } else if (password.length < 8) {
            // If password is less than 8 characters, show a warning
            console.warn("Password must be at least 8 characters long.");
        } else {
            // All validations passed, proceed with navigation
            navigation.navigate('BottomTab');
            setName('')
            setEmail('')
            setPassword('')
        }

    };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.subHeaderText}>Welcome back to the app</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin} >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={styles.createAccountText}>Create an account</Text>
            </TouchableOpacity>
        </View>
    );
}
export default LoginScreen;