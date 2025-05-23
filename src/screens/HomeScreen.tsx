import React, { useContext } from 'react'
import ImageColors from 'react-native-image-colors';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getColores } from '../helper/getColores';

import { GradientContx } from '../context/GradientContext';
import { useEffect } from 'react';


const {width:windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, upcoming,popular, topRated, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContx);

  const getPosterColor = async (index:number) =>{
    
    const url = "https://image.tmdb.org/t/p/w500" + nowPlaying[index].backdrop_path;
    const [primary='green', secondary='orange']= await getColores(url);
   
    setMainColors({primary,secondary});
  }

  useEffect(() => {
    getPosterColor(0);
  }, [nowPlaying.length>0])
  

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }


  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* Carousel principal */}
          <View style={{ height: 440, }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movies={item} />}
              sliderWidth={windowsWidth}
              itemWidth={300}
              vertical={undefined}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColor(index)}
            />
          </View>

          {/* Peliculas populares */}

          <HorizontalSlider title='Populares' movies={popular} />
          <HorizontalSlider title='Top' movies={topRated} />
          <HorizontalSlider title='Up coming' movies={upcoming} />


        </View>
      </ScrollView>
    </GradientBackground>
  )
}


