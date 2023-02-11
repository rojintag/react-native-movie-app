import {View, Text} from 'react-native';
import ListItems from '../components/containers/ListItems';
import {useIsFocused} from '@react-navigation/native';



const options =[
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" }
]

const MoviesScreen = ({navigation, route}) => {
    const isFocused = useIsFocused();

    return (
        <View>
        {isFocused && <ListItems options={options} page={route.name} navigation={navigation}/>}
        </View>
    );
}

export default MoviesScreen;