import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
const DashboardScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../images/img3.jpg')}
      style={styles.image}>
      <View style={styles.Container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
            color: '#F5FFFA',
          }}>
          Genetic Learning Workshop
        </Text>
        <MenuItem title="DNA" navigation={navigation} />
        <MenuItem title="Genes And Chromosomes" navigation={navigation} />
        <MenuItem title="Cellular Reproduction" navigation={navigation} />
        <MenuItem title="DNA Replication" navigation={navigation} />
        <MenuItem title="Herdity Calculator" navigation={navigation} />
      </View>
    </ImageBackground>
  );
};
export default DashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 700,
  },
});
const MenuItem = ({title, navigation}) => {
  const OpenSelectedMenuItem = title => {
    if (title == 'DNA') {
      navigation.navigate('DNA');
    }
    //Heredity
    else if (title == 'Herdity Calculator') {
      navigation.navigate('Heredity');
    }
    //Genes And Chromosomes
    else if (title == 'Genes And Chromosomes') {
      navigation.navigate('Genes');
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00d0b6',
        margin: 10,
        borderWidth: 5,
        borderRadius: 20,
        height: 60,
        borderColor: '#E6E6FA',
        elevation: 10,
      }}>
      <TouchableOpacity onPress={() => OpenSelectedMenuItem(title)}>
        <Text style={{fontSize: 25}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
