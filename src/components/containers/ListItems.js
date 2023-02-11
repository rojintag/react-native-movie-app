import { Center, Box, Button, HStack, Icon } from 'native-base';
import MovieType from '../forms/MovieType';
import { useState, useEffect } from 'react';
import { getData, getSearch } from '../../api/api';
import Loading from '../Layout/Loading';
import MovieCardsList from '../lists/MovieCardsList';
import { Ionicons } from '@expo/vector-icons';


const ListItems = ({ navigation, options, page, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState(options[0].value);
  const [category, setCategory] = useState(page);
  const [data, setData] = useState([]);
  const [label, setLabel] = useState('Select option');


  const searchButton = () => {
    if (query) {
      setIsLoading(true);
      getSearch(category, option, query)
        .then(data => {
          setData(data);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }
    else {
      console.log(error)

    }

  }

  const fetchData = () => {
    setIsLoading(true);
    console.log('fetching data');
    if (category === 'search') {
      setLabel('Choose search type');
    }
    else {
      getData(category, option)
        .then(response => {
          setData(response);
        })
        .then(() => setIsLoading(false))
        .catch(error => console.log(error));

    }
  }

  const handleSelect = (option) => {

    setOption(option);

  }

  useEffect(() => {
    if (category != 'search')
      fetchData();
  }, [option, ' ']);


  return (


    <Box w='100%' p='1'>
      <Center>



        {page === 'search' ?
          (
            <HStack space={4} p={3} justifyContent='space-around'>

              <MovieType options={options} onSelect={handleSelect} label={label} />
              <Button
                style={styles.button}
                onPress={searchButton}
                leftIcon=
                {<Icon as={Ionicons}
                  name="search"
                  size="sm"
                  color="white"
                />}
              >
                Start
              </Button>


            </HStack>


          ) :
          (
            <Box alignSelf="center" p='3'>
              <MovieType options={options} onSelect={handleSelect} label={label} />
            </Box>
          )}

      </Center>
      <Box style={styles.box}>
        {isLoading ? (
          <Loading />) : (
          <MovieCardsList data={data} page={page} category={category} navigation={navigation} />
        )}
      </Box>
    </Box>


  );
}

const styles = {
  button: {
    height: 10,
    width: 78,
    margintop: 7,
    backgroundColor: '#86198f'
  },
  box: {
    width: '100%',
    height: '100%'
  }
}

export default ListItems;