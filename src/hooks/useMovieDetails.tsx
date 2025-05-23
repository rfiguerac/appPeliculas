import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MuvieFull } from '../interfaces/MovieInterface';
import { CreditsResponse, Cast } from '../interfaces/CreditsInterface';

interface MovieDetail{
    isLoading: boolean;
    movieFull?:MuvieFull;
    cast: Cast[];
}
export const useMovieDetails = ( movieId: number ) => {

  const [state, setState] = useState<MovieDetail>({
      isLoading: true,
      movieFull: undefined,
      cast: []
  });


  const getMovieDetails = async() => {

      const movieDetailsPromise = movieDB.get<MuvieFull>(`/movie/${ movieId }`);
      const castPromise = movieDB.get<CreditsResponse>(`/movie/${ movieId }/credits`);

      const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);

      setState({
          isLoading: false,
          movieFull: movieDetailsResp.data,
          cast: castPromiseResp.data.cast
      })
  }

  useEffect(() => {
      getMovieDetails();
      
  }, []);


  return {
      ...state
  }
  
}



//  export const useMovieDetails = (movieId:Number) => {

//    const [state, setState] = useState<MovieDetail>(
//         {isLoading:true,
//         movieFull:undefined,
//         cast:[]}
//    );

//     const getMovieDetail = async () =>{
        
//         const movieDetailsPromes= movieDB.get<MuvieFull>(`/${movieId}`);
//         const castPromise= movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        
//         const [movieDetailsResp, castPromiseResp]= await Promise.all([movieDetailsPromes,castPromise]);
        
//         setState({
//             isLoading:false,
//             movieFull: movieDetailsResp.data,
//             cast: castPromiseResp.data.cast
//         });
        
//     }

//     useEffect(() => {
      
//         getMovieDetail();
    
      
//     }, [])
    
//   return{
//     ...state
//   }
// }
