import React, { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

export const VideoScreen = ({ route }: any): ReactElement => {
    const videoId = route.params.videoId

    return <View style={styles.container}>
        {/* <WebView source={{ html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pMdlF4rbf6Y?modestbranding=1&showinfo=0&autohide=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={styles.WebViewStyle} 
            allowsFullscreenVideo
        /> */}
        <WebView
            source={{ uri: `https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&autohide=1&rel=0` }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={styles.WebViewStyle}
            allowsFullscreenVideo
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 42
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    WebViewStyle: {
        marginLeft: 10,
        marginRight: 10,
        maxWidth: 560,
        maxHeight: 315
    }
})