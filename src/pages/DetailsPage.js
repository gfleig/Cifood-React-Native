import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class DetailsPage extends React.Component { 
  
  constructor(props) {
    super(props)
  }
  
  render() {    
    const { person } = this.props.navigation.state.params;

    return (
      <View>
        <Text>DetailsPage</Text>
      </View>
    );
  }
}