import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../componsnts';

const SuccessOrder = () => {
    return (
        <View style={styles.page}>
          <IlSuccessOrder />
          <Gap height={30} />
          <Text style={styles.title}>Yeay! Completed</Text>
          <Gap height={6} />
          <Text style={styles.subtitle}>Just Stay at home whle we are</Text>
          <Text style={styles.subtitle}>Preparing your best food</Text>
          <Gap height={30} />
          <View style={styles.buttonContainer} >
            <Button text="Order Other Foods" onPress={() => navigation.replace('MainApp')} />
          </View>
          <Gap height={12}/>
          <View style={styles.buttonContainer} >
            <Button text="View My Order" textColor="#FFF" color="#8D92A3" onPress={() => navigation.replace('MainApp')} />
          </View>
        </View>
      );
}

export default SuccessOrder

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      color: '#020202',
    },
    subtitle: {
      fontSize: 14,
      fontFamily: 'Poppins-Light',
      color: '#8D92A3',
    },
    buttonContainer : {
        width : '100%',
        paddingHorizontal : 80
    }
  });
