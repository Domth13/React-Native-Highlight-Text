import React from "react"
import uuid from 'react-native-uuid';

export default function exampleData(example) {
    const words = example.split(' ')
    const prevIndex = [0]
    const wordArray = words.map(word => {
      
      const id = uuid.v4()
      const color = null
      const start = example.indexOf(word, prevIndex[prevIndex.length -1])
      const end = example.indexOf(word, prevIndex[prevIndex.length -1]) + word.length
      const prevIndexCount = prevIndex.push(end)
      const array = {id: id, name: word, start: start, end: end , color: color}

      return array
    })
    return wordArray
  }


  function findDuplicates(array) {

    const duplicates = array.filter((item, index) => array.indexOf(item) !== index)

    return duplicates
  }
