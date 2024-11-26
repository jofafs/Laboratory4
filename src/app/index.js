import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/pasahero.png')} 
                    style={styles.image}
                />
            </View>

            <Text style={styles.title}>Login</Text>

            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry={!isShowPassword}
                style={styles.input}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={() => router.replace('dashboard')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Register"
                    onPress={() => router.push('register')}
                    color="#FF6347"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Forgot Password"
                    onPress={() => router.push('recover')}
                    color="#1E90FF"
                />
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginVertical: 8,
    },
});
