import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {foodDummy} from '../../assets';
import {Button, Gap, Header, ItemLIstFood, ItemValue} from '../../componsnts';

const OrderDetail = () => {
    return (
        <ScrollView>
        <Header title="Payment" subtitle="You deserve better meal" onBack />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemLIstFood
            type="order-summary"
            name="Sop bumil"
            price="380.000"
            items={14}
            image={foodDummy}
            items={14}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.000" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to :</Text>
          <ItemValue label="name" value="Hariyanto" />
          <ItemValue label="Phone No." value="+6281245773708" />
          <ItemValue label="Address" value="Jl. suka suka" />
          <ItemValue label="House No" value="0708" />
          <ItemValue label="City" value="Makassar" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status :</Text>
          <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
        </View>
        <View style={styles.button}>
          <Button
            text="Chancel My Order"
            onPress={() => navigation.replace('SuccessOrder')}
            color="#D9435E"
            textColor="#FFF"
          />
        </View>
        <Gap height={40}/>
      </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFF',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24,
      },
      label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8,
      },
      button: {
        paddingHorizontal: 24,
        marginTop: 24,
      },
})
