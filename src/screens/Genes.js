import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
const Genes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 0,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,
            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_1.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 1,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_2.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(2)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 2,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_3.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(3)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 3,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_4.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(4)</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 4,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_5.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(5)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 5,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_6.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(6)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 6,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_7.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(7)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 7,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_8.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(8)</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 8,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_9.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(9)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 9,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_10.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(10)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 10,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_11.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(11)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 11,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_12.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(12)</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 12,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_13.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(13)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 13,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_14.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(14)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 14,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_15.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(15)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 15,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_16.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(16)</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 16,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_17.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(17)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 17,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_18.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(18)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 18,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_19.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(19)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 19,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_20.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(20)</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 20,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_21.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(21)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 21,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_22.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(22)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 22,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_femme.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(23)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('ChromosomeDetails', {
              type: 23,
            });
          }}
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,

            padding: 10,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../images/chromosome_hommeXY.png')}
            style={styles.tinyLogo}
          />
          <Text style={{alignSelf: 'center'}}>(24)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Genes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
