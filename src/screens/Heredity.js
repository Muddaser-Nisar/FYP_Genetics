import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
const Heredity = ({navigation}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: ' Cleft Chin Gene',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed80-3ad53abb28ba',
      title: ' Eye Color Calculator',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed509-3ad53abb28ba',
      title: 'Dimple Gene',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: ' Ear Lobe Gene',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Widows Peak Gene',
    },
    {
      id: '158694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Blood Type Calculator',
    },
  ];
  const renderItems = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#E0FFFF',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          height: 80,

          borderWidth: 2,
          borderRadius: 25,
          alignItems: 'center',
          borderColor: '#191970',
        }}>
        <Text style={{textAlign: 'center', fontSize: 18}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          fontSize: 30,
          top: 1,
          justifyContent: 'center',
          backgroundColor: '#ADD8E6',
          borderRadius: 20,
          margin: 50,
          width: 300,
          height: 80,
          alignSelf: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: 'black',
          fontWeight: 'bold',
        }}>
        Heredity Calculator
      </Text>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ADD8E6',
          margin: 20,
          marginBottom: 100,
          borderRadius: 20,
        }}>
        <FlatList
          style={{marginTop: 20}}
          data={DATA}
          numColumns={2}
          keyExtractor={(item, index) => index}
          renderItem={renderItems}
        />
      </View>
    </View>
  );
};
export default Heredity;
