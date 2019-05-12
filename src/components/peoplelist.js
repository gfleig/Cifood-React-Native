import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import PeopleListItem from './peoplelistitem';

const PeopleList = props => {
    const {peoples} = props;
    const items = peoples.map(people => 
      <PeopleListItem 
        key={people.name.first} 
        people={people} 
      />
    )
        
    return (
      <ScrollView style={styles.container}>
        {items}
      </ScrollView>
    )
}

const styles = StyleSheet.create ({

  container: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: '#e2f9ff'
  },
  
})

export default PeopleList;