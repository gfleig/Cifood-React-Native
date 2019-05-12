import {createAppContainer, createStackNavigator} from 'react-navigation';

import MainPage from './src/pages/MainPage';
import DetailsPage from '.src/pages/DetailsPage';

const AppNavigator = createStackNavigator( {
  'Main': {
    screen: MainPage
  },
  'Details':{
    screen: DetailsPage,
    navigationOptions: ({ navigation }) => {
        const personName = navigation.state.params.person.name.first;

        return({
          title: personName,
          headerStyle:{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff'
          }
        });
    }
  }
}, 
{
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
			borderBottomWidth: 1,
			borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: center
    }
  }
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;