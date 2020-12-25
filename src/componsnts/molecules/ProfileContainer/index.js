import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {profileDummy} from '../../../assets';

const ProfileContainer = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.description}>Let's get some foods</Text>
      </View>
      <Image source={profileDummy} style={styles.profile} />
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 8,
    backgroundColor: '#FFF',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  description: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
});
