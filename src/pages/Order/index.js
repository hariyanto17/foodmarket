import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../componsnts';

const Order = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subtitle="wait for the best meal" />
          <View style={styles.tabcontainer}>
              <OrderTabSection/>
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1, },
  tabcontainer: {flex: 1, marginTop : 24},
});
