import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigationHook = useNavigation();

  const handleNavigation = (screenName) => {
    navigationHook.navigate(screenName);
  };

  return (
    <View style={homeStyles.conatainer}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            padding: 30,
            marginBottom: 20,
          }}
          onPress={() => handleNavigation('About')}
        >
          <Text> About </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            padding: 30,
            marginBottom: 20,
          }}
          onPress={() => handleNavigation('Details')}
        >
          <Text> Details </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            padding: 30,
            marginBottom: 20,
          }}
          onPress={() => handleNavigation('Login')}
        >
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
