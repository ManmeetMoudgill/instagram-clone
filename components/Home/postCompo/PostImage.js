import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const PostImage = ({image}) => {
    return (
        <View style={styles.postImageView}>
           <Image style={styles.postImage} source={{uri:image}}/>
        </View>
    )
}


const styles=StyleSheet.create({
    postImageView:{
        marginTop:5,
        width:'100%',
        height:450,
    },
    postImage:{
        height:'100%',
        resizeMode:'cover'
    }
})
export default PostImage
