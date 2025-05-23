import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { Movies } from '../interfaces/MovieInterface';
import { MoviePoster } from './MoviePoster';

interface Props{
    title:string;
    movies:Movies[];
}

export const HorizontalSlider = ({title,movies}:Props) => {


  return (
    <View style={{ height:260}}>
    <Text style={{fontSize:20,fontWeight:'bold', marginLeft:20, marginBottom:5}}>{title}</Text>
    <FlatList
      data={movies}
      renderItem={({item}: any) => <MoviePoster movies={item} width={140} height={200} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsVerticalScrollIndicator={false}
    />
  </View>
  )
}
