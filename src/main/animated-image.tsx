import React, { ReactElement, useRef, useEffect } from "react"
import { Animated } from "react-native"

export const AnimatedImage = (): ReactElement => {
    const opacity = useRef<Animated.Value>(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true
          }).start()

    }, [])

    return <Animated.Image source={{ uri: "https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", width: 200, height: 200 }} style={{ opacity }} />
}