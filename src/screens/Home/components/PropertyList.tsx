import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import {FlashList} from '@shopify/flash-list';
import data from '../../../assets/data/dummyData.json';
import PropertyListItem from './PropertyListItem';
import {PropertyContext} from '../../../context/propertyContext';

const PropertyList = ({onPress}) => {
  const context = useContext(PropertyContext);
  const {propertyValue, setSelectedProperty} = context;
  const [propertyData, setPropertyData] = useState(data);

  const renderItem = ({item}) => {
    return (
      <PropertyListItem
        item={item}
        onItemPressed={() => {
          setSelectedProperty(item);
          onPress();
        }}
      />
    );
  };

  useEffect(() => {
    if (propertyValue.length > 0) {
      let filtered = data.filter(item => {
        return (
          item?.cityName.toLowerCase() === propertyValue ||
          item?.countyName.toLowerCase() === propertyValue ||
          item?.state.toLowerCase() === propertyValue
        );
      });
      setPropertyData(filtered);
    } else {
      setPropertyData(data);
    }
  }, [propertyValue]);

  return (
    <View style={styles.body}>
      <Text style={{fontSize: 18, paddingBottom: 12}}>Property Listings</Text>
      <FlashList
        data={propertyData}
        renderItem={renderItem}
        estimatedItemSize={20}
      />
    </View>
  );
};

export default PropertyList;
