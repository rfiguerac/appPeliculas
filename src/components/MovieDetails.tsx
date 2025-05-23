import React from 'react'
import { FlatList, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/CreditsInterface';
import { MuvieFull } from '../interfaces/MovieInterface'
import { CastItem } from './CastItem';
interface Props{
    movieFull: MuvieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View>
      <View style={{flexDirection:"row"}}>
        <Icon name='star-outline' color="gray" size={16}/>
        <Text>{movieFull.vote_average}</Text>
        <Text style={{marginLeft:5}}>-
          {movieFull.genres.map( g => g.name).join(', ')}
       </Text>
      </View>
      <Text style={{fontSize:23, marginTop: 10, fontWeight:"bold"}}>
        Sinopsis
      </Text>
      <Text style={{fontSize:16}}>    {movieFull.overview}</Text>
      <Text style={{fontSize:23, marginTop: 10, fontWeight:"bold"}}>
        Presupuesto
      </Text>
      <Text>     {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movieFull.budget)}</Text>
      <View style={{marginTop:1}}>
      <Text style={{fontSize:23, marginTop: 5, fontWeight:"bold"}}>
        Actores
      </Text>
        <FlatList 
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <CastItem actor={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:10, height:70, marginBottom:100,}}
        />
        
      </View>
    </View>
  )
}
