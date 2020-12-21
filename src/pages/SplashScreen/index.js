import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'
import { Gap } from '../../componsnts'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 2000);
    }, [])

    return (
        <View style={styles.wrapper} >
            <Logo/>
            <Gap height={38} />
            <Text style={styles.text}>FoodMarket</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    wrapper : {
        backgroundColor : '#FFC700',
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    }, text: {
        fontSize: 32,
        color: '#020202',
        fontFamily : 'Poppins-Medium'
    }
})
