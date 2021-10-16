import React from 'react'
import Header from '../components/Home/Header'
import { View,Text, SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import Stories from '../components/Home/Stories'
import PostMainComponent from '../components/Home/PostMainComponent'
import {Posts} from '../data/Home/UsersPosts.js';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
                <Header/>
            <ScrollView vertical={true}>

                <Stories/>
                {Posts.map((arr,id)=>{
                    return (
                       
                        <PostMainComponent key={id} id={id} comments={arr.comments} likes={arr.likes} postImage={arr.imageUrl} postName={arr.user} postLogo={arr.profile_picture} />
                    )
                })}
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
