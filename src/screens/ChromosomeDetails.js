import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');
let data = [
  {
    DNA: [
      {
        length: "248'956'422 bp i.e. 8.2 cm",
        noGenes: '2’092',
      },
    ],

    Property_1: [
      {
        Heading: 'CAGT',
        Value:
          'Imagine a very long text written by using only 4 letters: A, T, G and C. Three billion of these letters – spread over 23 chromosomes – are linked to one another to form our genome. This is what constitutes our DNA, our biological identity and the genetic heritage that we pass on to our children.',
      },
    ],
    Property_2: [
      {
        Heading: 'CONTRACEPTION ',
        Value:
          'BRDT : This gene is involved in making sperm and is an ideal target for male contraception.',
      },
    ],
    Property_3: [
      {
        Heading: 'BEAUTIFUL HAIR',
        Value:
          'TCHH: Gene involved in producing hair. Certain variations of this gene are associated with frizzy hair',
      },
    ],
    Property_4: [
      {
        Heading: 'TAXI FOR FAT',
        Value:
          'ApoAII: This gene is involved in the transport of fats in our blood.',
      },
    ],

    Property_5: [
      {
        Heading: 'A SIXTH SENSE?',
        Value: 'VN1R5: This gene codes for a pheromone receptor.',
      },
    ],
  },

  {
    DNA: [
      {
        length: "242'193'529 bp i.e. 8.0 cm",
        noGenes: '1’302',
      },
    ],

    Property_1: [
      {
        Heading: 'REMEMBERING TO FORGET',
        Value: 'PPP1CB: This gene is involved in memory and forgetfulness.',
      },
    ],
    Property_2: [
      {
        Heading: 'THE ORIGIN OF FLATULENCE ',
        Value: 'LCT: This gene codes for a protein that digests lactose.',
      },
    ],
    Property_3: [
      {
        Heading: 'PAINLESS',
        Value: 'SCN9A: This gene is involved in the perception of pain.',
      },
    ],
    Property_4: [
      {
        Heading: 'THE COLOSSUS OF PROTEINS',
        Value:
          'Our proteins come in very different sizes. Chromosome 2 carries the gene which codes for the largest protein, known as titin.',
      },
    ],

    Property_5: [
      {
        Heading: 'AN INBUILT TIMEKEEPER',
        Value: 'PER2: This gene is involved in our daily biological rhythms.',
      },
    ],
  },
];
const ChromosomeDetails = ({route}) => {
  const [ispressed1, setIsPressed1] = useState(false);
  const [ispressed2, setIsPressed2] = useState(false);
  const [ispressed3, setIsPressed3] = useState(false);
  const [ispressed4, setIsPressed4] = useState(false);
  const [ispressed5, setIsPressed5] = useState(false);
  const [dataheading, setDataHeading] = useState('');

  const [databody, setDataBody] = useState('');

  const handlePressArrow_1 = sequence => {
    setDataHeading(data[sequence].Property_1[0].Heading);
    setDataBody(data[sequence].Property_1[0].Value);
    setIsPressed1(true);
    setIsPressed2(false);
    setIsPressed3(false);
    setIsPressed4(false);
    setIsPressed5(false);
  };
  const handlePressArrow_2 = sequence => {
    setDataHeading(data[sequence].Property_2[0].Heading);
    setDataBody(data[sequence].Property_2[0].Value);
    setIsPressed1(false);
    setIsPressed2(true);
    setIsPressed3(false);
    setIsPressed4(false);
    setIsPressed5(false);
  };
  const handlePressArrow_3 = sequence => {
    setDataHeading(data[sequence].Property_3[0].Heading);
    setDataBody(data[sequence].Property_3[0].Value);
    setIsPressed1(false);
    setIsPressed2(false);
    setIsPressed3(true);
    setIsPressed4(false);
    setIsPressed5(false);
  };
  const handlePressArrow_4 = sequence => {
    setDataHeading(data[sequence].Property_4[0].Heading);
    setDataBody(data[sequence].Property_4[0].Value);
    setIsPressed4(true);
    setIsPressed1(false);
    setIsPressed2(false);
    setIsPressed3(false);
    setIsPressed5(false);
  };
  const handlePressArrow_5 = sequence => {
    setDataHeading(data[sequence].Property_5[0].Heading);
    setDataBody(data[sequence].Property_5[0].Value);
    setIsPressed1(false);
    setIsPressed2(false);
    setIsPressed3(false);
    setIsPressed4(false);
    setIsPressed5(true);
  };
  const displayChromosomeData = sequence => {
    return (
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 17,
            alignSelf: 'center',
            padding: 5,
            fontWeight: 'bold',
          }}>
          Chromosome ({sequence + 1})
        </Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{paddingVertical: 20}}>
            <Ionicons
              name="caretleft"
              size={15}
              color={ispressed1 ? '#fff' : '#000'}
              onPress={() => handlePressArrow_1(sequence)}
            />
            <View style={{height: 10}} />
            <Ionicons
              name="caretleft"
              onPress={() => handlePressArrow_2(sequence)}
              size={15}
              color={ispressed2 ? '#fff' : '#000'}
            />
          </View>

          <Image
            style={{height: height * 0.3, width: width * 0.1}}
            resizeMode="contain"
            source={require('../images/chromosome1_det.png')}
          />
          <Image
            style={{height: height * 0.3, width: width * 0.1}}
            resizeMode="contain"
            source={require('../images/chromosome1_det.png')}
          />

          <View style={{paddingVertical: 20}}>
            <Ionicons
              onPress={() => handlePressArrow_3(sequence)}
              name="caretright"
              size={15}
              color={ispressed3 ? '#fff' : '#000'}
            />
            <View style={{height: 10}} />
            <Ionicons
              onPress={() => handlePressArrow_4(sequence)}
              name="caretright"
              size={15}
              color={ispressed4 ? '#fff' : '#000'}
            />
            <View style={{height: 10}} />
            <Ionicons
              onPress={() => handlePressArrow_5(sequence)}
              name="caretright"
              size={15}
              color={ispressed5 ? '#fff' : '#000'}
            />
          </View>
        </View>
        <View style={{padding: 15}}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            LENGTH OF DNA
          </Text>
          <Text style={{alignSelf: 'center'}}>
            {data[sequence].DNA[0].length}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            ESTIMATED NUMBER OF GENES
          </Text>
          <Text style={{alignSelf: 'center'}}>
            {' '}
            {data[sequence].DNA[0].noGenes}
          </Text>
        </View>
        <View
          style={{
            marginTop: 2,

            paddingHorizontal: width * 0.05,
            // paddingVertical: height * 0.15,
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 10,
            borderTopWidth: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: 'red',
            elevation: 20,
            margin: 10,
            padding: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              paddingHorizontal: 15,
            }}>
            {dataheading === ''
              ? data[sequence].Property_1[0].Heading
              : dataheading}
          </Text>
          <Text style={{lineHeight: 22, fontSize: 16}}>
            {databody === '' ? data[sequence].Property_1[0].Value : databody}
          </Text>
        </View>
      </View>
    );
  };
  const {type} = route.params;
  return <View style={styles.container}>{displayChromosomeData(type)}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
});
export default ChromosomeDetails;
