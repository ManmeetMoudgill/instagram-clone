import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const PostImage = () => {
    return (
        <View style={styles.postImageView}>
           <Image style={styles.postImage} source={require('../../../assets/girlPost.png')}/>
        </View>
    )
}


const styles=StyleSheet.create({
    postImageView:{
        borderWidth:2,
        borderColor:"white",
        marginTop:5,
        width:'100%'
    },
    postImage:{
        height:500,
        width:'100%',
        resizeMode:'stretch'
    }
})
export default PostImage
