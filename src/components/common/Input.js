import React, { Component } from 'react';
import { View ,TextInput  ,Text ,StyleSheet} from 'react-native';

const Input = ({label , value ,onChangeText,placeholder,secureTextEntry}) =>{
 const { inputStyle ,continerStyle ,labelStyle} = styles;

    return(
        <View  style={continerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            autoCorrect={false}
            onChangeText={onChangeText}
            style={inputStyle}  
             />
        </View>
    );
};


var styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        paddingRight: 5,
        paddingLeft:5,
        color: '#777',
        flex:4,
        lineHeight:23,
        borderColor: '#ccc',
        borderBottomWidth:0,
    },
    labelStyle:{
        flex:1,
        paddingLeft:20,
        fontSize:18
    },
    continerStyle:{
            height:40,
            flex:1,
            flexDirection:'row',
            alignItems:'center'
    }
});

export {Input};