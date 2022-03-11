import React from 'react'
import { TextInput } from 'react-native'
export default function Input ({style, placeholder, onChangeText, keyBoardType}) {
return (<TextInput placeholder={placeholder} style={style} onChangeText={onChangeText} keyboardType={keyBoardType }/>)
}