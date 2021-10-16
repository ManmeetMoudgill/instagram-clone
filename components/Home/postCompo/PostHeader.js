import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'

const PostHeader = () => {
    return (
        <View style={styles.postheaderMain}>
           
           {/* LEFT VIEW */}
            <View style={styles.leftView}>
                <Image style={styles.headerLeftLogo}  source={{uri:"https://instagram.fcia5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/209774752_832866137629149_8751351071836031266_n.jpg?_nc_ht=instagram.fcia5-1.fna.fbcdn.net&_nc_ohc=JD4z-EK28G0AX9ECwBg&edm=ALlQn9MBAAAA&ccb=7-4&oh=9e396c5bf0774f3e79d008d5b49bbb6a&oe=616C15EA&_nc_sid=48a2a6"}}/>
                <Text style={styles.LeftViewText}>Hardik Pandey</Text>
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
            borderTopColor:'gray',
            borderTopWidth:1
          
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
