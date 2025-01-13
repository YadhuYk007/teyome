import React from 'react';
import {} from 'react-native';
import Home from './screens/Home/Home';
import Navigation from './navigation/navigation';
import {PropertyProvider} from './context/propertyContext';

const App = () => {
  return (
    <PropertyProvider>
      <Navigation />
    </PropertyProvider>
  );
};

export default App;
