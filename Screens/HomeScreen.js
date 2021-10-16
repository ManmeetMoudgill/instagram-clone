import React from 'react'
import Header from '../components/Home/Header'
import { View,Text, SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import Stories from '../components/Home/Stories'
import PostMainComponent from '../components/Home/PostMainComponent'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
                <Header/>
            <ScrollView vertical={true}>

                <Stories/>
                <PostMainComponent/>
            </ScrollView>
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
