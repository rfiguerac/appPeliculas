import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { ActorResponse } from '../interfaces/ActorInterface';

interface ActorDetails{
    isLoading: boolean,
    actor?: ActorResponse;
}

export const UseActor = (actorId: string) => {

    const [state, setState] = useState<ActorDetails>({
        isLoading: true,
        actor: undefined,
    });
 
    const getActorDetails = async() => {

        
        const actorDetailsResp = await movieDB.get<ActorResponse>(`/person/${ actorId }`);
       
  
         setState({
            isLoading: false,
            actor: actorDetailsResp.data
         })
    }
  
    useEffect(() => {
        
        getActorDetails();
        
    }, []);
  return {
    ...state
  }
}
