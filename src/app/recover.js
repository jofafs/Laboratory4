import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { useRouter } from "expo-router";

const Recover = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const onDismissSnackBar = () => setVisible(false);

    const handleRecoverPassword = () => {
        setVisible(true);
        setTimeout(() => {
            router.back();
        }, 2000); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/forgyat.png')} 
                    style={styles.image}
                />
            </View>

            <Text style={styles.title}>Forgot Password</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />

            <Button
                mode="contained"
                onPress={handleRecoverPassword}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Recover Password</Text>
            </Button>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={Snackbar.DURATION_SHORT}
            >
                The instructions to recover your password have been sent to your email.
            </Snackbar>
        </View>
    );
};

export default Recover;

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
    button: {
        marginTop: 16,
        height: 40,
        justifyContent: "center",
        backgroundColor: "#1E90FF",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
