import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={aboutStyles.container}>
      <Text> Welcome to About Screen</Text>
    </View>
  );
};

const aboutStyles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
