import React, { useRef } from 'react'
import { Animated } from 'react-native';

export const useFace = () => {

    const opacity = useRef(new Animated.Value(0.1)).current;

    const fadeIn = (callback?: Function) => {
        Animated.timing(
            opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }
        ).start(() => callback ? callback() : null);
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true
        }
        ).start();
    }

  return {
    fadeIn,
    fadeOut,
    opacity
  }
}
