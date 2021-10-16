import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FooterComments = ({user,comment}) => {
    return (
        <View style={styles.commentDiv}>
           
            <Text style={styles.comment}>
             <Text style={styles.user}>{user}{"  "}</Text>    
             {comment}
          
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    commentDiv:{
        flexDirection:'row',
        borderColor:'white',
        borderWidth:2
    },user:{
        color:'white',
        fontWeight:'bold',
        paddingLeft:6,
        paddingRight:6,
        borderWidth:2,
        borderColor:'white'
    },comment:{
        color:'white',
        paddingLeft:6,
        paddingRight:6
    }
})
export default FooterComments
