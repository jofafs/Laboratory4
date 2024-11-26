import { View, Text, Button} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  return (
    <View style={{ padding: 16 }}>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={() => router.replace('/')} 
          color="#FF6347"
        />
      </View>
    </View>
  );
};

const styles = {
  buttonContainer: {
    marginVertical: 8,
  },
};

export default Settings;
