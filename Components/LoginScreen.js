import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigationHook = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    navigationHook.navigate('Details', {
      userName: name,
      userEmail: email,
      userPassword: password,
    });
    setName(null);
    setEmail(null);
    setPassword(null);
  };

  return (
    <View style={loginStyles.container}>
      <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: 'bold' }}>
        Please Enter Details{' '}
      </Text>
      <View>
        <Text style={{ fontSize: 20, marginBottom: 10 }}> Email </Text>
        <TextInput
          style={loginStyles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, marginBottom: 10 }}> Password </Text>
        <TextInput
          style={loginStyles.input}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, marginBottom: 10 }}> Name </Text>
        <TextInput
          style={loginStyles.input}
          placeholder='Enter Name'
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <TouchableOpacity
        style={loginStyles.loginButton}
        onPress={() => handleSubmit()}
      >
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 20,
            paddingBottom: 20,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('screen');

const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: width - 40,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    borderColor: 'white',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'white',
    width: '22%',
    height: '5%',
    borderRadius: 10,
  },
});

export default LoginScreen;
