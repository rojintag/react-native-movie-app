import { View } from 'react-native';
import { useState } from 'react';
import ListItems from '../components/containers/ListItems';
import SearchInput from '../components/forms/SearchInput';

const options = [
  { label: "Movie", value: "movie" },
  { label: "Multi", value: "multi" },
  { label: "TV", value: "tv" }
]

const SearchScreen = ({ navigation, route }) => {
  const [query, setQuery] = useState('');

  const handleInput = (query) => {
    setQuery(query);
  }
  return (
    <View>
      <SearchInput onChangeInput={handleInput} />
      <ListItems options={options} page={route.name} query={query} navigation={navigation} />

    </View>
  );
}

export default SearchScreen;