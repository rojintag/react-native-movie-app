import { useState, useEffect } from "react";
import Loading from "../Layout/Loading"
import MovieCardsList from "../lists/MovieCardsList";
import { getMovies } from "../../api/api";
import MovieType from "../forms/MovieType";

const MoviesContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showType, setShowType] = useState("popular");
    const [items, setItems] = useState({});

    const fetchMovies = async () => {
        setIsLoading(true);
        const response = await getMovies(showType);

        setItems(response.results);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, [showType]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <MovieType
                        showType={showType}
                        setShowType={setShowType}
                    />
                    <MovieCardsList
                        navigation={navigation}
                        items={items}
                        type={"movie"}
                    />
                </>
            )}
        </>
    );
};

export default MoviesContainer;