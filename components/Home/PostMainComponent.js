import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import PostFooter from './postCompo/PostFooter'
import PostHeader from './postCompo/PostHeader'
import PostImage from './postCompo/PostImage'


const PostMainComponent = ({commentsArray,id,user,caption,comments,likes,postImage,postName,postLogo}) => {
    return (
        <View  key={id}>
            {/* post header */}
            <PostHeader logo={postLogo} name={postName}/>

            {/* POST IMAGE */}
            <PostImage image={postImage}/>

            {/* POST FOOTER */}
            
            <PostFooter  likes={likes} commentsArray={commentsArray} comments={comments} caption={caption} user={user}/>
           

        </View>
    )
}

 const styles=StyleSheet.create({
    
}) 
export default PostMainComponent
