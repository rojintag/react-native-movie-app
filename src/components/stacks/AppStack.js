import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MoviesScreen from '../../Screens/MoviesScreen';
import SearchScreen from '../../Screens/SearchScreen';
import TVShowsScreen from '../../Screens/TVShowsScreen';
import TabNavigator from '../Layout/TabNavigator'
import MovieDetailsScreen from '../../Screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (

  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
        options={{
        title: 'Movies App',
        headerStyle: {
            backgroundColor: '#a21caf',
            alignItems: 'center',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
        }
        }}
        >
        {(props) => <TabNavigator {...props} movies={MoviesScreen} search={SearchScreen} shows={TVShowsScreen} />}
        </Stack.Screen>
        <Stack.Screen
            name='Details'
            component={MovieDetailsScreen}
            options={({ route }) => ({
            title: route.params.title,
            headerBackTitleVisible: true,
            headerBackTitle:'Back to List',
            headerBackTitleStyle: {
                color: '#fff',
            },
            headerStyle: {
                backgroundColor: '#a21caf',
                alignItems: 'center',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
            }

        })}
        />
      </Stack.Navigator>
  </NavigationContainer>

 );

 export default AppStack;
