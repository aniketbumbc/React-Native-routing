import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const route = useRoute();
  const { userName, userPassword, userEmail } = route.params;

  return (
    <View style={detailsStyle.container}>
      <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: '400' }}>
        Welcome to Details Screen
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '200' }}>
        {' '}
        Name: {userName}
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '200' }}>
        Email: {userEmail}
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '200' }}>
        Password: {userPassword}
      </Text>
    </View>
  );
};

const detailsStyle = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
