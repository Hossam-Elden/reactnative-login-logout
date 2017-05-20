import React, { Component } from 'react';
import  {Text ,StyleSheet} from 'react-native';
import {Card , Button , CardSection ,Input, Spinner } from './common/index';
import firebase from  'firebase';



class  LoginForm extends Component{




    state= { email : '' , Password:'' , error : '', loading: false}

    onButtonPress(){
    const {email , Password } = this.state;
    this.setState({error:' ' , loading : true});

    firebase.auth().signInWithEmailAndPassword(email,Password)
      .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email , Password)
             .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
}

onLoginFail(){
    this.setState({
     error:'faild login',
     loading: false 
    });
}
onLoginSuccess(){
    this.setState({
        email : '',
        Password: '',
        loading: false,
        error : ''
    });
}


    renderButton(){
        if (this.state.loading){
            return(
                <Spinner size="small" />
            );
        }
        return(
             <Button onPress={this.onButtonPress.bind(this)}>Login </Button>
        );
    }



    render(){
        return(
            <Card>
                <CardSection>
      <Input
           value= {this.state.email}
           label="Email"
           placeholder="Email@gmail.com"
           onChangeText={email=>this.setState({email})}
      />          
            </CardSection>


                <CardSection>
                    <Input 
                        secureTextEntry
                        value={this.state.Password}
                        onChangeText={Password => this.setState({Password})}
                        label="Pass"
                        placeholder="password"
                    
                    />

                </CardSection>
                     <Text style={styles.error} >{this.state.error} </Text>

                <CardSection >
                    
                {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


var styles = StyleSheet.create({
    error: {
        fontSize: 18,
        color:'#ce332d',
        alignSelf: 'center',
     },

});

export default LoginForm;