import React, { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import { VideoButton } from '../ui/video-button'

export const MainScreen = (): ReactElement => {
    return <View style={styles.container}>
        <VideoButton videoId="O6hLYnhWV7w">Вертикальное видео</VideoButton>
        <VideoButton videoId="3qFvCPmee8U">С авторскими правами</VideoButton>
        <VideoButton videoId="Ed9Ud3HZOTs">Без авторских прав</VideoButton>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 42
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    sectionHeader: {
      color: "red",
      fontSize: 22,
      padding: 10,
      marginBottom: 15
    }
  })