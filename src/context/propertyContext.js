import React, {createContext, useState} from 'react';

const PropertyContext = createContext(null);

const PropertyProvider = ({children}) => {
  const [propertyValue, setPropertyValue] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('');

  return (
    <PropertyContext.Provider
      value={{
        propertyValue,
        setPropertyValue,
        selectedProperty,
        setSelectedProperty,
      }}>
      {children}
    </PropertyContext.Provider>
  );
};

export {PropertyContext, PropertyProvider};
