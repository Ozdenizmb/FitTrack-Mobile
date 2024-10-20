import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import sport1 from '../../assets/sport1.jpg';
import sport2 from '../../assets/sport2.jpg';
import sport3 from '../../assets/sport3.jpeg';
import sport4 from '../../assets/sport4.jpg';

const images = [
    sport1,
    sport2,
    sport3,
    sport4
];

const ImageSlider = () => {
    return (
        <View>
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
}

export default ImageSlider

const styles = StyleSheet.create({
    wrapper: {
        height: 500,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})