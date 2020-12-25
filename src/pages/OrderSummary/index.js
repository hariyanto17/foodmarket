import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { foodDummy } from '../../assets'
import { Button, Header, ItemLIstFood, ItemValue } from '../../componsnts'

const OrderSummary = ({navigation}) => {
    return (
        <View>
            <Header title="Payment" subtitle="You deserve better meal" onBack />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>
                <ItemLIstFood image={foodDummy} items={14}/>
                <Text style={styles.label}>Details Transaction</Text>
                <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
                <ItemValue label="Driver" value="IDR 50.000" />
                <ItemValue label="Tax 10%" value="IDR 1.800.000" />
                <ItemValue label="Total Price" value="IDR 390.803.000" valueColor="#1ABC9C" />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Deliver to :</Text>
                <ItemValue label="name" value="Hariyanto" />
                <ItemValue label="Phone No." value="+6281245773708" />
                <ItemValue label="Address" value="Jl. suka suka" />
                <ItemValue label="House No" value="0708" />
                <ItemValue label="City" value="Makassar" />
            </View>
            <View style={styles.button}>
                <Button text="Checkout Now" onPress={() => navigation.replace('SuccessOrder')}/>
            </View>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content : {
        backgroundColor : '#FFF',
        paddingHorizontal : 24,
        paddingVertical : 16,
        marginTop : 24
    },
    label : {
        fontSize : 14,
        fontFamily : 'Poppins-Regular',
        color : '#020202',
        marginBottom : 8
    },
    button : {
        paddingHorizontal : 24,
        marginTop : 24
    }
})
