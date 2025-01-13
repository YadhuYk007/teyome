import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import Views from '../../../assets/icons/eye.svg';

const PropertyListItem = ({item, onItemPressed}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      activeOpacity={0.8}
      onPress={() => onItemPressed()}>
      <Image
        style={styles.image}
        source={{
          uri: item.photoURLs[0],
        }}
      />
      <Text style={styles.Listprice}>{item.listingPrice}</Text>
      <Text>{`${item.address}, ${item.countyName}, ${item.state}`}</Text>
      <View style={styles.views}>
        <Views height={15} width={15} />
        <Text style={styles.count}>{`${item.viewCount}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyListItem;
