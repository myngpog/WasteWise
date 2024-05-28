import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#666" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry />
        <TextInput style={styles.input} placeholder="Retype Password" placeholderTextColor="#666" secureTextEntry />
        
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>Forgot Your Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.05, // 5% of screen height
  },
  iconContainer: {
    alignSelf: 'flex-start', // Align icon to top left
  },
  titleContainer: {
    flex: 1, // Take remaining space
    alignItems: 'center', // Center text horizontally
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D5A3D',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: height * 0.2, // 20% of screen height
  },
  input: {
    width: '80%', // Adjust width as needed
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  signUpButton: {
    width: '80%', // Adjust width as needed
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D5A3D',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: '#2D5A3D',
    fontSize: 16,
  },
});

export default LoginScreen;
