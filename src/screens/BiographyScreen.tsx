import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { UseActor } from '../hooks/UseActor'
import { RootStackParams } from '../navigation/Navigation'

const screenHeight = Dimensions.get("screen").height;
interface Props extends StackScreenProps<RootStackParams, "BiographyScreen"> {

}


const cumple = (dato:string, dato2:String) =>{

//formatiar fecha cumpleaños
    var fecha;
  if(dato2){
    console.log("fecha---"+dato2);
  }
  if (dato) {
    var cumple = dato.split("-");
    var mes=new Date().getMonth();
    var dia= new Date().getDate();
    //var birthday_date = new Date(Number(cumple[2]),Number(cumple[1]),Number(cumple[0]));
    var age= new Date().getFullYear() - Number(cumple[0]);
    if(new Date().getMonth() < (Number(cumple[1])-1)){
        age--;
    }
    if((Number(cumple[1])-1) == mes && dia < Number(cumple[0])){
      age--;
    }

    fecha = cumple[2] + '/' + cumple[1] + '/' + cumple[0]+"  ("+age+" años)";
    
    return fecha
    //calcular edad
   
  }
}


export const BiographyScreen = ({ route, navigation }: Props) => {
    const actors = route.params;
    const uri = `https://image.tmdb.org/t/p/original${ actors.profile_path }`;

    const{isLoading, actor} = UseActor(actors.id.toString())
    
    
    
    if (isLoading){console.log(actors.credit_id)}
  return (
    <ScrollView>
     <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
        <Image
          source={{ uri }}
          style={styles.posterImage}
        />
        </View>
      </View>
      <View style={styles.marginContainer}>
          <Text style={styles.subTitle}>{actors.original_name}</Text>
          <Text style={styles.title}>{actors.name}</Text>
          <Text style={styles.subTitle}>
            {
              
               (actor?.birthday) ? cumple(actor?.birthday,actor?.deathday!) : null
            }</Text>
        </View>
        <View style={{marginHorizontal:20}}>
        <Text style={{fontSize:23, marginTop: 10, fontWeight:"bold"}}>
        Biografia
      </Text>
      <Text style={{fontSize:16}}>    {actor?.biography}</Text>
        </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      //backgroundColor: "red",
      
      width: "100%",
      height: screenHeight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
  
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
  
    },
    imageBorder:{
      flex:1,
      overflow:"hidden",
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
  
    },
    marginContainer:{
      marginHorizontal:20,
      marginTop:20,
    },
    subTitle:{
      fontSize:16,
      opacity:0.8,
  
    },
    title:{
      fontSize:20,
      fontWeight:"bold",
    },
    backBotton:{
      position:"absolute",
      zIndex:999,
      elevation:9,
      top:30,
      left:5,
    }
  });