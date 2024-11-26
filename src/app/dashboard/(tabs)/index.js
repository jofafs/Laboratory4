import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';

const Home = () => {
  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const handleBookNow = () => {
    setVisible(true); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>From location A to location B</Text>

      <Button title="Book now" onPress={handleBookNow} />

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={Snackbar.DURATION_SHORT}
      >
        Your ride has been successfully booked
      </Snackbar>
    </View>
  );
};

export default Home;
