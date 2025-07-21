import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome Home!</Text>
        <Text style={styles.subText}>
          You have successfully implemented a Drawer Navigation!
        </Text>
        <View style={styles.taskInfo}>
          <Text style={styles.taskText}>
            • Swipe from left or tap menu icon to open drawer
          </Text>
          <Text style={styles.taskText}>
            • Navigate between Home, Profile, and Settings
          </Text>
          <Text style={styles.taskText}>
            • Custom drawer with user header and icons
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d69e1ff', // Single color instead of gradient
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 30,
    textAlign: 'center',
  },
  taskInfo: {
    backgroundColor: 'rgba(183, 214, 234, 0.2)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 350,
  },
  taskText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
});

export default HomeScreen;