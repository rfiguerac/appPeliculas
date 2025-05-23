import ImageColors from "react-native-image-colors";

export const getColores = async (uri:string) =>{
    
    //const url = "https://image.tmdb.org/t/p/w500" + nowPlaying[index].backdrop_path;

    const result = await ImageColors.getColors(uri, {});
    let primary;
    let secundary;
    switch (result.platform) {
        case 'android':
          // android result properties
          primary=result.dominant;
          secundary=result.average;
          break;
        case 'ios':
          // iOS result properties

          primary=result.primary;
          secundary=result.secondary;
          break;
        default:
          throw new Error('Unexpected platform key')
      }

      return [primary,secundary];


  }