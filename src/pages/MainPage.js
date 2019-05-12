import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Header from '../components/header';
import axios from 'axios';
import PeopleList from '../components/peoplelist'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      people: []
    };
  }
  
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {        
        const {results} = response.data;
        this.setState({people: results })
        //console.log(this.state.people);
      })
  }
   
  
  render() {
    //{this.componentDidMount()}
    return (      
      <View>        
        <PeopleList 
          peoples = {this.state.people}
          onPressItem = { pageParams => {
            this.props.navigation.navigate('Details', pageParams);
          }} />
      </View>
    );
  }
}
