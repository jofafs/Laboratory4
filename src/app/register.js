import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Snackbar } from 'react-native-paper';

const Register = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    setVisible(true);
    setTimeout(() => {
      router.back();
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.section, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/smirk.png')} style={styles.logo} />
      </View>
      <View style={styles.section}>
        <TextInput
          label={'Full name'}
          placeholder='Full name'
          style={styles.input}
        />
        <TextInput
          label={'Email'}
          placeholder='Email'
          style={styles.input}
        />
        <TextInput
          label={'Password'}
          placeholder='Password'
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={handleRegister}
          color="#FF6347"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => router.back()}
          color="#1E90FF"
        />
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={Snackbar.DURATION_SHORT}
      >
        Successfully registered, going back to Login screen now
      </Snackbar>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  section: {
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '100%',
  },
});
