import React from 'react';
import { Alert, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const PeopleListItem = props => {
  const {person, navigateToDetails} = props;  

  return (
    <TouchableHighlight onPress={()=>navigateToDetails(person)} underlayColor="white">
      <View key={person.name.first} style={styles.line}>      
        <Image
          source={{ uri: person.picture.thumbnail }}
          style={styles.profileThumb}
        />      
        <Text style={styles.lineText}>
          {jsCapitalize(person.name.title)} {jsCapitalize(person.name.first)} {jsCapitalize(person.name.last)}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

function jsCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = StyleSheet.create({
  line: {    
    flexDirection: 'row',    
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',    
  },

  lineText: {    
    fontSize: 22,
    textAlign: 'left',
    textAlignVertical: 'center',   
    //paddingTop: 15,
    paddingLeft: 0,
  },

  profileThumb: {    
    width: 48,
    height: 48,
    margin: 6,
    marginHorizontal: 12,
    borderRadius: 24,
  },
});

export default PeopleListItem;
