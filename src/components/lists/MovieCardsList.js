import { FlatList } from "native-base";
import MovieCard from "../MovieCard";

const MovieCardsList = props => {
  const {navigation, items, type} = props
  return (
    <FlatList
        data={items}
        renderItem={({ item }) => (
            <MovieCard title={item.title ? item.title : item.name}
            image={item.poster_path}
            popularity={item.popularity}
            release_date={item.release_date}
            id={item.id}
            category={category === 'search' ? item.media_type : category}
            navigation={navigation}
            type={type} />
        )}
    />
);
}

export default MovieCardsList