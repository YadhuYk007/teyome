import React, {useContext} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PropertyContext} from '../../context/propertyContext';
import {styles} from '../Home/styles';
import Line from '../../components/Line';
import Back from '../../assets/icons/leftArrow.svg';
import Navigate from '../../assets/icons/navigate.svg';
import Bedroom from '../../assets/icons/bedroom.svg';
import Bathroom from '../../assets/icons/bathroom.svg';

const PropertyDetails = ({navigation}) => {
  const context = useContext(PropertyContext);
  const {selectedProperty} = context;

  const startNavigation = () => {
    const url = `https://www.google.com/maps?q=${selectedProperty.latitude},${selectedProperty.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        style={styles.back}>
        <Back height={15} width={15} />
      </TouchableOpacity>
      <ScrollView>
        <Image
          style={styles.detailsImage}
          source={{
            uri: selectedProperty.photoURLs[0],
          }}
        />
        <View style={{paddingHorizontal: 12, marginTop: 16}}>
          <View style={styles.priceView}>
            <Text
              style={styles.price}>{`${selectedProperty.listingPrice}`}</Text>
            <Text>{`${selectedProperty.sqFt} sqFt`}</Text>
          </View>
          <Line />
          <View style={{marginBottom: 12}}>
            <Text style={styles.detailsHeader}>Utilities</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.utils}>
                <Bedroom width={40} height={40} />
                <Text style={styles.utilValues}>
                  {selectedProperty.bedrooms}
                </Text>
              </View>
              <View style={styles.utils}>
                <Bathroom width={30} height={30} />
                <Text style={styles.utilValues}>
                  {selectedProperty.totalBaths}
                </Text>
              </View>
            </View>
          </View>
          <Line />
          <View style={{marginVertical: 12, flexDirection: 'row'}}>
            <View style={{width: '70%'}}>
              <Text style={styles.detailsHeader}>Location</Text>
              <Text
                style={{
                  color: 'black',
                }}>{`${selectedProperty.address}, ${selectedProperty.cityName}, ${selectedProperty.countyName}, ${selectedProperty.state}, ${selectedProperty.zip4}`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => startNavigation()}
              style={styles.navigate}>
              <Navigate height={30} width={30} />
            </TouchableOpacity>
          </View>
          <Line />
          <View style={{marginVertical: 12}}>
            <Text style={styles.detailsHeader}>Type</Text>
            <Text>{`${selectedProperty.idxPropType}`}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyDetails;
