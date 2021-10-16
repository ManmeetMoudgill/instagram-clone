import React from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native'
import FooterComments from './FooterComments'


const PostFooter = ({likes,comments}) => {
    return (
        <View style={styles.footerView} >
                {/* UPPER DIV */}

                <View style={styles.upperView}>
                        {/* left Upper Footer View */}
                        <View style={styles.LeftView}>
                            <TouchableOpacity>
                                <Image style={styles.footerLogos} source={require('../../../assets/heart.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.footerLogos} source={require('../../../assets/comment.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.footerLogos} source={require('../../../assets/send.png')}/>    
                            </TouchableOpacity>    
                        </View>


                        {/* RIGHT UPPER FOOTER VIEW */}
                        <View style={styles.RightView}>
                            <TouchableOpacity>
                                <Image style={styles.footerLogos} source={require('../../../assets/bookmark.png')}/>
                            </TouchableOpacity>
                        </View>
                </View>

                {/* OTHER VIEWS HERE */}
                <Text style={styles.likes}>{likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes</Text>
                <View style={styles.commentContainer}>

                    <ScrollView vertical={true}>

                    {comments.map((arr,id)=>{
                        
                        return(
                            
                            <FooterComments key={id} user={arr.user} comment={arr.comment}/>
                            
                            ) 
                            
                            
                        })}
                    </ScrollView>
                </View>
        </View>
    )
}


const styles=StyleSheet.create({

  upperView:{
            paddingTop:3,
            paddingLeft:3,
            paddingRight:3,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
    },
    LeftView:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },RightView:{
        flexDirection:'row',
        paddingTop:3,
    },footerLogos:{
        width:30,
        height:30,
        marginLeft:8,
        marginRight:8,
    },likes:{
        color:'white',
        marginLeft:10,
        marginTop:2
    },commentContainer:{
        height:100,
        paddingLeft:5,
        paddingRight:5,
        marginTop:8
    }

})
export default PostFooter
