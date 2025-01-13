import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import data from '../../../assets/data/dummyData.json';
import {extractUniqueNames} from '../../../utils/utils';
import {PropertyContext} from '../../../context/propertyContext';
import Clear from '../../../assets/icons/close.svg';

const Header = () => {
  const [text, setText] = useState('');
  let properties = extractUniqueNames(data);
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(PropertyContext);
  const {setPropertyValue} = context;

  useEffect(() => {
    if (text.length > 0) {
      setSearchResult();
      selected.length == 0 && setIsOpen(true);
    } else {
      setResults([]);
    }
  }, [text]);

  const setSearchResult = useCallback(() => {
    let results: any = [];
    if (text.length == 1) {
      results = properties.filter(item =>
        item.toLowerCase().startsWith(text.toLowerCase()),
      );
    } else {
      results = properties.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
    }
    setResults(results);
  }, [text]);

  useEffect(() => {
    setPropertyValue(selected);
  }, [selected]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item);
          setText(item);
          setIsOpen(false);
        }}>
        <Text style={{fontSize: 16, color: 'back', fontWeight: '400'}}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Teyome</Text>
      <View style={styles.searchView}>
        <TextInput
          maxLength={20}
          placeholder="Search for places and properties"
          placeholderTextColor={'grey'}
          style={styles.search}
          value={text}
          onChangeText={value => {
            selected.length > 0 && setSelected('');
            setText(value);
            value.length == 0 && setPropertyValue(value);
          }}
        />
        {text.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setPropertyValue('');
              setText('');
            }}>
            <Clear height={20} width={20} />
          </TouchableOpacity>
        )}
      </View>

      {text.length > 0 && results.length > 0 && isOpen && (
        <View style={styles.searchResultView}>
          <FlatList data={results} renderItem={renderItem} />
        </View>
      )}
      {text.length > 0 && results.length == 0 && isOpen && (
        <View style={styles.searchResultView}>
          <Text style={{color: 'black', padding: 8, fontSize: 14}}>
            No results found
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;
