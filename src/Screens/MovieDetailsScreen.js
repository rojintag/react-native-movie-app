import { View } from 'react-native';
import { getOne} from '../api/api';
import { useEffect, useState } from 'react';
import MoviesContainer from '../components/containers/MoviesContainer';

const MovieDetailsScreen = props => {
  const { navigation, route } = props
  const { id, category, title } = route.params;
  const [data, setData] = useState({});

  const fetchDetails = () => {

    getOne(category, id).then((response) => {
      setData(response);
    });


  }
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View>
      <MoviesContainer data={data} navigation={navigation} title={title} />
    </View>

  );
}

export default MovieDetailsScreen;