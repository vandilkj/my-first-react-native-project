import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Cesta />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
