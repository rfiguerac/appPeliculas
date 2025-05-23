import React, { useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContx } from '../context/GradientContext';
import { useEffect } from 'react';
import { useFace } from '../hooks/useFace';
interface Props{
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {

    const {color, previoColor, setPreviosMainColors} = useContext(GradientContx);

    const {opacity,fadeIn, fadeOut} = useFace();
    useEffect(() => {
      fadeIn(
        () => {
            setPreviosMainColors(color);
            fadeOut();
        }
      )
    }, [color])
    
    
  return (
        <View style={{flex:1}}>
            {/*  */}
            <LinearGradient
                colors={[previoColor.primary,previoColor.secondary]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.1, y:0.1}}
                end={{x:0.5, y:0.5}}
            />
           
            <Animated.View
                style={{...StyleSheet.absoluteFillObject, opacity}}
            >
                 <LinearGradient
                colors={[color.primary,color.secondary]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.1, y:0.1}}
                end={{x:0.5, y:0.5}}
            />

            </Animated.View>
                {children}

            
        </View>
    )
}
