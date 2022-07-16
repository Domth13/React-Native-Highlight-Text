import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({ text, onPress, backgroundColor, borderColor, margin=10, fontColor }) {
  return (
    <View>
        <View style={{ paddingBottom: 5}}>
            <TouchableOpacity

                activeOpacity={0.8}
                style={{ 
                    width: '100%', 
                    borderRadius: 10, 
                    borderColor: borderColor, 
                    backgroundColor: backgroundColor, 
                    borderWidth: 1.5,
                    alignItems:'center', 
                    justifyContent: 'center',   
                }}
                onPress={onPress}
            
                >
                <Text style={{color: fontColor, fontSize: 18, margin: margin, fontWeight:'900'}}>{text}</Text>
            </TouchableOpacity>
        </View>
     
    </View>
  )
}