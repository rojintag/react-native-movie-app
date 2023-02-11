import { View } from 'react-native';
import ListItems from '../components/containers/ListItems';
import {useIsFocused} from '@react-navigation/native';

const options = [
  { label: "Airing Today", value: "airing_today" },
  { label: "On The Air", value: "on_the_air" },
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" }
]

const TVShowsScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  return (
    <View>
      {isFocused && <ListItems options={options} page={route.name} navigation={navigation} />}
    </View>
  );
}

export default TVShowsScreen;