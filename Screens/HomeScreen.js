import React from 'react'
import Header from '../components/Home/Header'
import { View,Text, SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import Stories from '../components/Home/Stories'
import PostMainComponent from '../components/Home/PostMainComponent'
import {Posts} from '../data/Home/UsersPosts.js';
import {Divider} from 'react-native-elements'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
                <Header/>
            <ScrollView vertical={true}>

                <Stories/>
                <View>
                  <Divider width={1} style={{marginTop:15}} orientation='vertical'/>  

                {Posts.map((arr,id)=>{
                    return (
                        
                        <PostMainComponent key={id} id={id} comments={arr.comments} likes={arr.likes} postImage={arr.imageUrl} postName={arr.user} postLogo={arr.profile_picture} />
                        )
                    })}
                    </View>
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
