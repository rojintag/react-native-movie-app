import { View } from 'react-native';
import ListItems from '../components/containers/ListItems';

const options = [
  { label: "Airing Today", value: "airing_today" },
  { label: "On The Air", value: "on_the_air" },
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" }
]

const TVShowsScreen = ({ navigation, route }) => {
  return (
    <View>
      <ListItems options={options} page={route.name} navigation={navigation} />
    </View>
  );
}

export default TVShowsScreen;