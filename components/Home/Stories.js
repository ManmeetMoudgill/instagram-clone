import React from 'react'
import { View, Text,StyleSheet, ScrollView } from 'react-native'
import SingleStory from './SingleStory'

import { users } from '../../data/Home/UsersStories'


const Stories = () => {
    return (
        <View style={styles.StoryMain}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                {users.map((arr,id)=>{
                    return (
                        <SingleStory key={id} image={arr.image} name={arr.name}/>
                    )
                })}
                    
                </ScrollView>
            </View>
    )
}


const styles=StyleSheet.create({
    StoryMain:{
    
        flexDirection:'row',
        justifyContent:'space-around',
        overflow:'scroll',
        marginTop:5
    }
})
export default Stories
