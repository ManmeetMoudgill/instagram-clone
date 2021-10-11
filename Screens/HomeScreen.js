import React from 'react'
import Header from '../components/Home/Header'
import { View,Text, SafeAreaView,StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Header/>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
        container:{
            backgroundColor:'black',
            flex:1
        }
})
export default HomeScreen