import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props{
    actor: Cast
}
export const CastItem = ({actor}: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const uri = "https://image.tmdb.org/t/p/w500" + actor.profile_path;

  return (
    <TouchableOpacity
    activeOpacity={0.8}

            onPress={() => navigation.navigate("BiographyScreen", actor)}
    >
    <View style={styles.card}>
        {
            actor.profile_path && (
               <Image source={{uri}} style={{width:50,height:50}}/> 
            )
        }
        
        <View><Text style={{fontSize:18,fontWeight:"bold"}}>    {actor.name}</Text>
        <Text style={{fontSize:18,opacity:0.8}}>    {actor.character}</Text>
        </View>

    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    card:{
        marginRight:30,
        backgroundColor:"white",
        borderRadius:10,
        height:50,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        paddingRight:10,
        

        elevation: 11,
    }
});