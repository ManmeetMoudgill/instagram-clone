import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
           {/* left view */}
           <View style={styles.leftView}>
               <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/instagram.png')}/>
               </TouchableOpacity>

           </View>

           {/* right View */}
           <View style={styles.rightView}>
               <TouchableOpacity>
                    <Image style={styles.icons} source={require('../../assets/add.png')}/>
               </TouchableOpacity>
               <TouchableOpacity>
                    <Image style={styles.icons} source={require('../../assets/fav.png')}/>
               </TouchableOpacity>
               <TouchableOpacity>
                   <View style={styles.unreadBadge}>
                        <Text style={styles.unreadText}>17</Text>

                   </View>
                    <Image style={styles.icons} source={require('../../assets/chat.png')}/>
               </TouchableOpacity>
           </View>
        </View>
    )
}
const styles=StyleSheet.create({
    textNormal:{
        color:'white',
        fontSize:20
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    logo:{
        
        width:100,
        height:50,
        resizeMode:'contain'
    },
    leftView:{
        paddingLeft:10
    },rightView:{
        flexDirection:'row',
        paddingRight:10
    },icons:{
            width:30,
            height:30,
            marginLeft:10,
            resizeMode:'contain',
            zIndex:-1
    },unreadBadge:{
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#FF3250',
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        left:18,
        width:28,
        bottom:18,
        height:22,
        zIndex: 1,
        borderRadius:18
    },unreadText:{
        color:'white',
        fontSize:14,
        fontWeight:'600'
       
    }
})
export default Header
