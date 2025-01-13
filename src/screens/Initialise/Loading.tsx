import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {HOME} from '../../constants/screenNames';
import {styles} from '../Home/styles';

const Loading = ({navigation}) => {
  useEffect(() => {
    //API calls
    setTimeout(() => {
      navigation.navigate(HOME);
    }, 3000);
  }, []);

  return (
    <View style={styles.loading}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <LottieView
        source={require('../../assets/lottie/TeyomeLoader.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

export default Loading;
