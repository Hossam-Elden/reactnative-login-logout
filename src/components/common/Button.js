import  React from  'react';
import  {Text , TouchableOpacity} from  'react-native';

const Button = ({onPress , children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.Button}>
                <Text style={styles.TextStyle}>
                    {children}
                </Text>
        </TouchableOpacity>        
    );
};
var styles= {
    TextStyle:{
        color:'#007aff',
        fontSize:20,
        alignSelf :'center',
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: '500'
    },
      Button:{
          flex:1 ,
          alignSelf: 'stretch',
          backgroundColor: '#fff',
                    borderWidth : 1 ,

          borderRadius : 5, 
          borderColor: '#007aff',
          marginLeft: 5,
          marginRight: 5
      }  
}
export {Button} ;