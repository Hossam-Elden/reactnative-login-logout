import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import  {Header, Button, CardSection ,Spinner} from './components/common/index';
import LoginForm from './components/LoginForm';



class App extends Component {
    state={ loggedIn: null}

    componentWillMount (){
            firebase.initializeApp({
                    apiKey: 'AIzaSyCJYrXMDO6yvMDA0hZxZGX-Drao7lStXWI',
                    authDomain: 'auth-43fa9.firebaseapp.com',
                    databaseURL: 'https://auth-43fa9.firebaseio.com',
                    projectId: 'auth-43fa9',
                    storageBucket: 'auth-43fa9.appspot.com',
                    messagingSenderId: '346577889373'
                });

             firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        this.setState({loggedIn :true }); 
                    } else{
                        this.setState({loggedIn:false});
                    }
             });   
    }


    renderContent(){

        switch(this.state.loggedIn){
            case true:
                    return (
                        <CardSection>
                                <Button onPress={()=>firebase.auth().signOut()}> Log Out </Button>
                        </CardSection>
                            );
            case false:
                   return <LoginForm />
        
            default:
                          return (
                        <CardSection>
                            <Spinner size="large"/>
                            </CardSection>
                            );
        
    }

}

    render(){
            return (
                
                <View>
                  <Header headerText="Heeelo" />
                  {this.renderContent()}
                </View>
            );
    }
}

export default App;