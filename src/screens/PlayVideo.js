import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import VideoPlayer from 'react-native-video-player'

const PlayVideo = () => {
  return(
    <View>
      <VideoPlayer
        video={{uri: "https://assets.mixkit.co/videos/preview/mixkit-man-in-a-suit-works-from-the-kitchen-4830-large.mp4"}}
        autoplay={false}
        defaultMuted={true}
        videoWidth={1500}
        videoWidth={1000}
        thumbnail={require('../assets/laptop.jpg')}
      />
    </View>
  )
}

export default PlayVideo

const styles = StyleSheet.create({

})