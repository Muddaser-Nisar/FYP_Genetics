//import liraries
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('DashboardScreen');
  }, 3000);
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        alignItems: 'center',
        marginTop: 50,
      }}>
      <ImageBackground
        source={require('../images/img3.jpg')}
        style={styles.image}></ImageBackground>
      <Text
        style={{
          fontSize: 30,
          color: 'white',
        }}>
        Welcome to Genetic Learning Workshop
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 700,
  },
});

//make this component available to the app
export default SplashScreen;
