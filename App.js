import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HighlightExample from './src/highlight/highlight';

const example = 'Auswählen und highlighten und so weiter und so fort'

export default function App() {
  return (
    <View style={styles.container}>
      <HighlightExample example={example} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
