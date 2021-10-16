import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import PostHeader from './postCompo/PostHeader'
import PostImage from './postCompo/PostImage'
const PostMainComponent = () => {
    return (
        <View>
            {/* post header */}
            <PostHeader/>

            {/* POST IMAGE */}
            <PostImage/>

            {/* POST FOOTER */}


        </View>
    )
}


const styles=StyleSheet.create({
    mainPostCompo:{

    }
})
export default PostMainComponent
