import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Genes = () => {
  return (
    <View style={styles.container}>
      <Text>Genes and Chromosomes info</Text>

      <Image
        source={require('../images/Adenine.png')}
        style={styles.tinyLogo}
      />
    </View>
  );
};

export default Genes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
