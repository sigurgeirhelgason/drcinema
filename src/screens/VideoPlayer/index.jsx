import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';

function VideoPlayer({ route }) {

    const url=route.params;
    console.log('check this out', url)
    const path=url[0].results;

    return (
        <View style={styles.container}>
            {path[0]? (

                <WebView
                    source={{ uri: path[0].url }}
                    style={styles.video}
                    containerStyle={styles.videoContainer}
                    allowsFullscreenVideo
                    autoplay
                    gyroscope
                />
            ):null}
        </View>

    );
}

export default VideoPlayer;
