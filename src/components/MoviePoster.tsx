import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Movies } from '../interfaces/MovieInterface';
import { RootStackParams, Navigation } from '../navigation/Navigation';


interface Props {
    movies: Movies;
    height?: number;
    width?: number;

}
type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>
export const MoviePoster = ({ movies, height = 420, width = 300 }: Props) => {

   
    const url = "https://image.tmdb.org/t/p/w500" + movies.poster_path;

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <TouchableOpacity 
            activeOpacity={0.8}

            onPress={() => navigation.navigate("DetailScreen", movies)}
        >
        <View style={{
            width, 
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:7}}>
           
            <View style={styles.imageContainer}>
                <Image style={styles.images}
                    source={{ uri: url }} />
            </View>
            {/* <Text>{movies.overview}</Text> */}
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    imageContainer: {
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    images: {
        flex: 1,
        borderRadius: 18,
    }
});