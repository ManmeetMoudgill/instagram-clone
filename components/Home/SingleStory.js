import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'

const SingleStory = ({image,name}) => {
    return (
        
        <View style={styles.MainCompo}>
            <TouchableOpacity>
           <Image style={styles.storyLogo}  source={{uri:image}}/>
        </TouchableOpacity>
           <TouchableOpacity>
               <Text style={styles.storyUser}>{
                name.length>11 ? name.slice(0,10).toLowerCase()+'...':name.toLowerCase()

               }</Text>
           </TouchableOpacity>
        </View>
    )
}


const styles=StyleSheet.create({
    MainCompo:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        marginLeft:2,
        marginRight:2
    },
    storyLogo:{
        width:80,
        height:80,
        borderColor:'#ff8501 ',
        borderWidth:3,
        shadowColor:'#EA582D',
        resizeMode:'stretch',
        borderRadius:50
    },
    storyUser:{
        color:'white',
        fontWeight:'500',
    }
})
export default SingleStory
