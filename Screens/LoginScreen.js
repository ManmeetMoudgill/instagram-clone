import React from 'react'
import { View, Text,Button } from 'react-native'

const LoginScreen = ({navigation}) => {
    const Login=()=>{
        navigation.navigate('Home')
    }
    return (
        <View>
            <Text style={{color:'white',textAlign:'center'}}>THIS IS LOGIN SCREEN</Text>
            <Button onPress={Login} title="Login"/>
        </View>
    )
}

export default LoginScreen
