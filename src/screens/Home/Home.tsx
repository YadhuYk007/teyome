import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {styles} from './styles';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import {PROPERTY_DETAILS} from '../../constants/screenNames';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const focused = useIsFocused();
  useEffect(() => {
    if (focused) {
      const backAction = () => {
        Alert.alert('Exit Teyome', 'Are you sure you want to exit the app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove(); // Cleanup the event listener
    }
  }, [focused]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Header />
      <PropertyList
        onPress={() => {
          navigation.navigate(PROPERTY_DETAILS);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default Home;
