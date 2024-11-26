import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/profile-pic.jpg')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Name: Judison Claude R. Nuñez</Text>
        <Text style={styles.infoText}>Sex: Male</Text>
        <Text style={styles.infoText}>Type: Commuter</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
  },
});
