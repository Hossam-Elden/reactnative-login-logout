import React from 'react';
import {View , StyleSheet} from 'react-native';




const CardSection = (props) => {
    return (
        <View style={styles.CardSec}>
            {props.children}
        </View>
    )
};


var styles = StyleSheet.create({
    CardSec: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection :'row',
        position:'relative'
    },

});


export {CardSection};