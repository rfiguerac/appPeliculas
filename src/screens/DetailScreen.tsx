import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from "react-native-vector-icons/Ionicons"
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Movies } from '../interfaces/MovieInterface';
import { MovieDetails } from '../components/MovieDetails';



const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {

}

export const DetailScreen = ({ route, navigation }: Props) => {
  const movies = route.params;
  const uri = `https://image.tmdb.org/t/p/original${ movies.poster_path }`;


  const {isLoading, cast, movieFull } = useMovieDetails(movies.id);

  
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
          <Text style={styles.subTitle}>{movies.original_title}</Text>
          <Text style={styles.title}>{movies.title}</Text>
          {/* <Text style={styles.subTitle}>{movies.overview}</Text> */}
        </View>
          {/* <Icon name="star-outline" size={30} color="#4F8EF7" /> */}

        <View style={{marginHorizontal:20, marginTop:10}}>
            
          {
            
            isLoading
            ?<ActivityIndicator size={35} color="gray" style={{marginTop:20}}/>
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
          }
        </View>
        <View style={styles.backBotton}>
          <TouchableOpacity 
          onPress={() => navigation.pop()}
          >
          <Icon 
          name="arrow-back-outline"
          color="white" 
          size={50} 
          />
          </TouchableOpacity>
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