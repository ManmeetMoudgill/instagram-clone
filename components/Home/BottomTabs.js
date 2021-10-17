import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'


const BottomTabs = () => {
    return (
        <View style={styles.BottomTabs}>
            <TouchableOpacity>
                <Image  style={styles.bottomIcons} source={require('../.././assets/home.png')}  />

            </TouchableOpacity>
            <TouchableOpacity>
                    <Image  style={styles.bottomIcons} source={require('../.././assets/search.png')}  />
            </TouchableOpacity>

            <TouchableOpacity>

                    <Image  style={styles.bottomIcons} source={require('../.././assets/reels.png')}  />
            </TouchableOpacity> 

            <TouchableOpacity>
                    <Image  style={styles.bottomIcons} source={require('../.././assets/shop.png')}  />
                
            </TouchableOpacity>

            <TouchableOpacity>
                <Image  style={styles.bottomIcons} source={{uri:"https://instagram.fcia5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/244768084_1691885624349591_1625625957934569879_n.jpg?_nc_ht=instagram.fcia5-1.fna.fbcdn.net&_nc_ohc=4NUxSG5R-jAAX8XxWT1&tn=Lt2GZB6jaoERFnMK&edm=ALlQn9MBAAAA&ccb=7-4&oh=1560e32d021fb15d70d51eec71a7cb73&oe=616B769D&_nc_sid=48a2a6"}}  />
            
            </TouchableOpacity>   
        </View>
    )
}



const styles=StyleSheet.create({

    BottomTabs:{
        
        justifyContent:'space-around',
        flexDirection:'row'

    },bottomIcons:{
        width:30,
        marginTop:6,
        marginBottom:6,
        height:30,
        borderRadius:40
    }
})

export default BottomTabs
