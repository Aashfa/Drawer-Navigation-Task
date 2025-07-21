import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      
      
      {/* Dark Mode Toggle */}
      <View style={styles.settingItem}>
        <Ionicons name="moon" size={24} color="#2d69e1ff" />
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#2d69e1ff" : "#f4f3f4"}
        />
      </View>

      {/* Notifications Toggle */}
      <View style={styles.settingItem}>
        <Ionicons name="notifications" size={24} color="#2d69e1ff" />
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#2d69e1ff" : "#f4f3f4"}
        />
      </View>

      {/* Account Settings */}
      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="person" size={24} color="#2d69e1ff" />
        <Text style={styles.settingText}>Account Settings</Text>
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      </TouchableOpacity>

      {/* Help Center */}
      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="help-circle" size={24} color="#2d69e1ff" />
        <Text style={styles.settingText}>Help Center</Text>
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      </TouchableOpacity>

  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SettingsScreen;