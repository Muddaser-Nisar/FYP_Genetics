import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ctx,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';

const DNA = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../images/Imp.png')}
      style={{
        width: '100%', // applied to Image
        height: '100%',
      }}
      imageStyle={{
        resizeMode: 'stretch', // works only here!
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 12,
            width: 50,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 67,
            marginLeft: 132,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 18,
            borderRadius: 100,
            marginTop: 67,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 12,
            width: 33,
            borderRadius: 100,
            marginTop: 52,
            marginLeft: 175,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5580A0',
            height: 10,
            width: 29,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 29,
            marginLeft: 122,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FBF175',
            height: 11,
            width: 30,
            borderRadius: 100,
            marginTop: 29,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 38,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 29,
            marginLeft: 85,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 11,
            width: 40,
            borderRadius: 20,
            marginTop: 29,
            marginLeft: 8,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FBF175',
            height: 11,
            width: 35,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 27,
            marginLeft: 72,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#5580A0',
            height: 11,
            width: 15,
            borderRadius: 20,
            marginTop: 27,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 11,
            width: 32,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 75,
            marginLeft: 82,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 35,
            borderRadius: 20,
            marginTop: 75,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5580A0',
            height: 11,
            width: 45,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 25,
            marginLeft: 72,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FBF175',
            height: 12,
            width: 51,
            borderRadius: 20,
            marginTop: 25,
            marginLeft: 8,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 57,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 25,
            marginLeft: 90,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 11,
            width: 57,
            borderRadius: 20,
            marginTop: 25,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FBF175',
            height: 11,
            width: 44,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 26,
            marginLeft: 124,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#5580A0',
            height: 11,
            width: 20,
            borderRadius: 20,
            marginTop: 26,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 11,
            width: 10,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 63,
            marginLeft: 158,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 35,
            borderRadius: 20,
            marginTop: 63,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5580A0',
            height: 11,
            width: 34,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 28,
            marginLeft: 115,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FBF175',
            height: 11,
            width: 40,
            borderRadius: 20,
            marginTop: 28,
            marginLeft: 3,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 40,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 27,
            marginLeft: 78,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 11,
            width: 30,
            borderRadius: 20,
            marginTop: 27,
            marginLeft: 2,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FBF175',
            height: 11,
            width: 28,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 28,
            marginLeft: 58,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#5580A0',
            height: 11,
            width: 16,
            borderRadius: 20,
            marginTop: 28,
            marginLeft: 1,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#9BD353',
            height: 11,
            width: 25,
            borderRadius: 100,
            flexDirection: 'column',
            marginTop: 79,
            marginLeft: 65,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#C9573A',
            height: 11,
            width: 35,
            borderRadius: 20,
            marginTop: 79,
            marginLeft: 1,
          }}
          onPress={() => navigation.navigate('Adenine')}></TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default DNA;
