import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {profileDummy} from '../../assets';
import {ProfileTabSection} from '../../componsnts';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.ProfileDetai}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image style={styles.photoContainer} source={profileDummy} />
          </View>
        </View>
        <Text style={styles.name}>Hariyanto</Text>
        <Text style={styles.email}>Hariyanto@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  ProfileDetai : {
      backgroundColor: '#FFF',
      paddingBottom : 26
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
