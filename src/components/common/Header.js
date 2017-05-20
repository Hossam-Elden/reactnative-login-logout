import  React from 'react';
import  {Text ,StyleSheet , View} from  'react-native';


const Header = (props)=>{
    return(
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>

    </View>
    );
};

var styles = StyleSheet.create({
    textStyle: {
        fontSize: 38,
        alignSelf: 'center' ,
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

export  {Header};