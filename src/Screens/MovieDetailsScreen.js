import { View } from 'react-native';
import { getShowDetails } from '../api/api';
import { useEffect, useState } from 'react';
import MovieDetails from '../components/MovieDetails';


const MovieDetailsScreen = props => {
  const { navigation, route } = props
  const { id, category, title } = route.params;
  const [data, setData] = useState({});

  const fetchDetails = () => {

    getShowDetails(category, id).then((response) => {
      setData(response);
    });


  }
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View>
      <MovieDetails data={data} navigation={navigation} title={title} />
    </View>

  );
}

export default MovieDetailsScreen;