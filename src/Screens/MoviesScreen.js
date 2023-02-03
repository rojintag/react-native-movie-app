import {View, Text} from 'react-native';
import MoviesContainer from '../components/containers/MoviesContainer';


const options =[
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" }
]

const MoviesScreen = ({navigation, route}) => {

    return (
        <View>
        <MoviesContainer options={options} page={route.name} navigation={navigation}/>
        </View>
    );
}

export default MoviesScreen;