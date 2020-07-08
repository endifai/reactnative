import React, { ReactElement } from "react"
import { useNavigation } from "@react-navigation/native"
import { TouchableHighlight, Text, StyleSheet } from "react-native"

interface Props {
    videoId: string
    children: string
}

export const VideoButton = ({ videoId, children }: Props): ReactElement => {
    const navigation = useNavigation()

    const handlePress = (): void => {
        navigation.navigate("Video", { videoId })
    }

    return <TouchableHighlight onPress={handlePress} activeOpacity={0.8} underlayColor="#000000">
        <Text style={styles.description}>{children}</Text>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    description: {
        fontSize: 22,
        marginBottom: 10
    }
})