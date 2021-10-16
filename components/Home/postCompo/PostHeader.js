import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'

const PostHeader = ({logo,name}) => {
    return (
        <View style={styles.postheaderMain}>
            <View style={styles.leftView}>
                <Image style={styles.headerLeftLogo}  source={{uri:logo}}/>
                <Text style={styles.LeftViewText}>{name}</Text>
            </View>


           {/* RIGHT VIEW */}
           <View style={styles.rightSideView}>
                <TouchableOpacity>
                    <Image style={styles.righSideImage}  source={require('../../../assets/more.png')} />
                </TouchableOpacity>
           </View>
        </View>
    )
}


const styles=StyleSheet.create({
    postheaderMain:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingRight:5,
            paddingLeft:5,
            paddingTop:5,
            marginTop:15,
         
          
    },leftView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center' 
       },
       headerLeftLogo:{
            width:50,
            height:50,
            borderColor:'#FF8501',
            borderWidth:2,
            borderRadius:50
       },
       LeftViewText:{
           color:'white',
           marginLeft:5
       },righSideImage:{
           width:30
       }

})
export default PostHeader
