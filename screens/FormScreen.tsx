import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import RNPickerSelect from 'react-native-picker-select';

const FormScreen = () => {
  // Form states
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(null);
  
  // Checkbox states
  const [game1Checked, setGame1Checked] = useState(false);
  const [game2Checked, setGame2Checked] = useState(false);

  const handleSubmit = () => {
    const selectedGames = [
      game1Checked ? 'Game 1' : '',
      game2Checked ? 'Game 2' : ''
    ].filter(Boolean).join(', ') || 'None';
    
    Alert.alert(
      'Login Information',
      `Email: ${email}\nPIN: ${pin}\nPassword: ${password}\nGender: ${gender || 'Not specified'}\nSelected Games: ${selectedGames}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Login Form */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={styles.label}>4-digit PIN:</Text>
      <TextInput
        placeholder="Enter PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {/* Gender Selection */}
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setGender(value)}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
            { label: 'Prefer not to say', value: 'unspecified' },
          ]}
          placeholder={{ label: 'Select your gender...', value: null }}
          style={pickerSelectStyles}
          value={gender}
        />
      </View>

      {/* Games Selection */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Select Games</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxRow}>
          <Checkbox 
            value={game1Checked} 
            onValueChange={setGame1Checked} 
            color={game1Checked ? '#6200ee' : undefined}
          />
          <Text style={styles.checkboxLabel}>Game 1</Text>
        </View>

        <View style={styles.checkboxRow}>
          <Checkbox 
            value={game2Checked} 
            onValueChange={setGame2Checked} 
            color={game2Checked ? '#6200ee' : undefined}
          />
          <Text style={styles.checkboxLabel}>Game 2</Text>
        </View>
      </View>

      <Text style={styles.selectionText}>
        {game1Checked || game2Checked ? `You selected: ${game1Checked ? 'Game 1' : ''} ${game2Checked ? 'Game 2' : ''}` : 'No games selected'}
      </Text>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Submit" 
          onPress={handleSubmit} 
          color="#6200ee"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 50,
  },
  checkboxContainer: {
    marginVertical: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  selectionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: '#333',
  },
  inputAndroid: {
    fontSize: 16,
    color: '#333',
  },
  placeholder: {
    color: '#999',
  },
});

export default FormScreen;