import { Box, Image, Text, HStack } from 'native-base';
import { StyleSheet } from 'react-native';

const SingleContent = props => {
  const { data, category, navigation } = props;
  return (

    <Box style={styles.container}>
      <Text
        style={styles.title}
      >
        {data.title ? data.title : data.name}
      </Text>
      <Box maxW="80" rounded="lg" overflow="hidden" my={2} mx="auto">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }}
          alt={data.title ? data.title : data.name}
          style={styles.image}

        />
      </Box>
      <Box
        style={styles.textWrapper}
      >
        <Text

          style={styles.text}
        >
          {data.overview}
        </Text>
      </Box>
      <HStack space={2} justifyContent="center" mt={2}>
        <Text fontSize="sm"
          fontWeight="light"
          fontStyle="italic"
        >Popularity: {data.popularity}</Text>
        <Text> | </Text>
        <Text fontSize="sm"
          fontWeight="light"
          fontStyle="italic"
        >Release Date: {data.release_date}</Text>
      </HStack>

    </Box>

  );
}

const styles = {
  container: {
    alignItems: "center",
    marginTop: '5px',

  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "gray",
    textAlign: "center"
  },
  image: {

    width: '250px',
    height: '250px'
  },
  textWrapper: {
    overflow: "hidden",
    width: "90%"
  },
  text: {
    fontSize: ".8rem",
    fontWeight: "light",
    color: "gray"
  }
}

export default SingleContent;