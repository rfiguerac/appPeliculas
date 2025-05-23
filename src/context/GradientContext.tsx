import React, { createContext, useContext, useState } from 'react'

interface ImageColors{
    primary: string,
    secondary: string
}

interface ContextProps{
    color: ImageColors,
    previoColor:ImageColors,
    setMainColors:(color: ImageColors)=> void;
    setPreviosMainColors:(color: ImageColors)=> void;
    
}

export const GradientContx = createContext({} as ContextProps);
export const GradientProvider = ({children}: any) =>{

    const [color, setColor] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [previoColor, setPrevioColor] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });
    
    const setMainColors = (color: ImageColors) =>{
        setColor(color); 
    }
    const setPreviosMainColors = (color: ImageColors) =>{
        setPrevioColor(color); 
    }

    return(
        <GradientContx.Provider value={{
            color,
            previoColor,
            setMainColors,
            setPreviosMainColors,

        }}>
            {children}
        </GradientContx.Provider>
    )
}
