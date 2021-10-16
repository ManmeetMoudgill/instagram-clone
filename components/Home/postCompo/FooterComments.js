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
        marginBottom:10
    },user:{
        color:'white',
        fontWeight:'bold',
        paddingLeft:6,
        paddingRight:6,
    },comment:{
        color:'white',
        paddingLeft:10,
        paddingRight:6
    }
})
export default FooterComments
