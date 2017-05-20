import React from 'react';
import {View , StyleSheet} from 'react-native';
const Card= (props) =>{
    return(
        <View style={styles.Card}>
            {props.children}
        </View>
    );
};


var styles = StyleSheet.create({
    Card: {
        elevation   : 5,
        borderWidth : 2,
        borderRadius: 1,
        borderColor: '#eee',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10,
    },
    viewStyle:{
        backgroundColor : '#eee',
        height:60,
        paddingTop:10,
        elevation   : 5,
        borderWidth : 2,
        borderColor : '#eee',
        position:'relative'
    }
});

export {Card} ;