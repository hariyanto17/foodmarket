import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({text, color= '#FFC700', textColor = '#020202', onPress}) => {
    return (
        <TouchableOpacity style={styles.container(color)} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.text(textColor)}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : (color) => ({
        backgroundColor : color,
        padding : 12,
        borderRadius : 8
    }),
    text : (color) => ({
        fontSize : 14,
        fontFamily : 'Poppins-Medium',
        color : color,
        textAlign : "center"
    })
})
