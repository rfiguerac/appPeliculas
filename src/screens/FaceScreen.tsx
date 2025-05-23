import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFace } from '../hooks/useFace'



export const FaceScreen = () => {
     const {opacity, fadeIn, fadeOut}= useFace();
    return (
        <View style={{
            flex: 1,
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <Animated.View
                style={{
                    backgroundColor: 'blue',
                    width: 150,
                    height: 150,
                    borderWidth: 10,
                    borderColor: "white",
                    opacity: opacity
                }}

            />
            <Button
                title='FadeIn'
                onPress={fadeIn}
            />

            <Button
                title='FadeOuT'
                onPress={fadeOut}
            />
        </View>

    )
}
