import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {foodDummy} from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({image, onPress, items}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <View style={{flex: 1}}>
          <Text style={styles.text}>Sop Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
        {
          items ? <Text style={styles.items}>{items} items</Text> : <Rating />
        }
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regilar',
    color: '#020202',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Poppins-Regilar',
    color: '#8D92A3',
  },
  items :{
    fontSize: 13,
    fontFamily: 'Poppins-Regilar',
    color: '#8D92A3',
  }
});
