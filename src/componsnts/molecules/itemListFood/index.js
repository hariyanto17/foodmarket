import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {foodDummy} from '../../../assets';
import Rating from '../Rating';

/*
type
- product
- orde-summary
- in-progress
- past-orders
*/

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  name,
  price,
  type,
  date,
  status
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        //item list product untuk homepage
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        //item list product untuk homepage
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        //item list product untuk homepage
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        //item list product untuk homepage
        return (
          <>
          <View style={{flex: 1}}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.price}>
              {items} items . IDR {price}
            </Text>
          </View>
          <View>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.status}>{status}</Text>
          </View>
        </>
        )
      default:
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        {renderContent()}
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
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regilar',
    color: '#8D92A3',
  },
  date : {
    fontSize: 10,
    fontFamily: 'Poppins-Regilar',
    color: '#8D92A3',
  },
  status : {
    fontSize: 10,
    fontFamily: 'Poppins-Regilar',
    color: '#D9435E',
  }
});
