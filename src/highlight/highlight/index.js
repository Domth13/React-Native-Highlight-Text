import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SelectableText } from "@alentoma/react-native-selectable-text";

import Button from '../../button'
import exampleData from '../exampleData';
import highlightColor from '../colors';


const example = 'Auswählen und highlighten und so weiter und so fort'

export default function HighlightExample() {
  const wordArray = exampleData(example)

  const [wordData, setWordData ] = useState(wordArray)
  
  const getSelectionData = (event, content, start, end) => {
    const color = highlightColor(event) 
    setWordData(wordData.map(
      word => ( word.start >= start && word.end <= end ? {...word, color: color}: word)))
  }

  const renderSubstring = () => {

    const substring = wordData.map(
      word => <Text key={word.id}><Text style={{ backgroundColor: word.color}}>
        {example.substring(word.start, word.end)}{' '}</Text></Text>)

    return substring  
  }

  const handleButtonPress = () => {
    setWordData(wordArray)
  }

return (
  <View style={styles.container}>
    <View style={{ alignItems:'center'}}>
      <SelectableText  
        menuItems={["Gelb", "Grün", 'Orange', 'Lila', 'Blau', 'Löschen']} 
        onSelection={({ eventType, content, selectionStart, selectionEnd }) => 
          {getSelectionData(eventType, content, selectionStart, selectionEnd)}}
        TextComponent={renderSubstring}
        style={styles.paragraph}
        />
    </View>
    <View style={{ alignItems:'center'}}>
      <View style={{ width: '50%', paddingTop: 25}}>
          <Button 
              text={'Zurücksetzen'}
              backgroundColor={'#0082B6'}
              borderColor={'#0082B6'}
              fontColor={'#fff'}
              onPress={handleButtonPress}
          />
      </View>
      <View style={{ backgroundColor: 'black', margin: 2, borderRadius: 10}}>
        <Text style={{ fontSize: 20, padding: 2}}>
          {wordData.map(word => 
            <Text style={{ color: word.color }}> {word.name} </Text>)}
        </Text>
      </View>
      
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#fff",
    padding: 5,
  },
  paragraph: {
    paddingRight: 2,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});