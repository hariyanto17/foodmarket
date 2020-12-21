import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../componsnts'

const SignUp = () => {
    return (
        <View style={styles.page} >
            <Header title="Sign Up" subtitle="Register and eat"/>
            <View style={styles.container} >
                <TextInput label="Full Name" placeholder="Type your full name" />
                <Gap height={16}/>
                <TextInput label="Email Address" placeholder="Type your Email address" />
                <Gap height={16}/>
                <TextInput label="Password" placeholder="Type your password" />
                <Gap height={24}/>
                <Button text="Continue" />
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page : {
        flex : 1
    },
    container : {
        backgroundColor : '#FFF',
        paddingHorizontal : 24,
        paddingVertical : 26,
        marginTop: 24,
        flex : 1
    }
})
