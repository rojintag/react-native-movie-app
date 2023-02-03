import { StyleSheet, View, Image, Text } from 'react-native';

const MovieCard = props => {
  const { title, image, popularity, release_date, id, category, navigation } = props;

  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
          alt={title}
          size="lg"
          resizeMode="cover"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text fontSize="md" fontWeight="bold">{title}</Text>
        <Text mt="0.5" fontSize="sm">Popularity: {popularity}</Text>
        <Text mt="0.5" fontSize="sm">Release Date: {release_date}</Text>
        <Button
          onPress={() => navigation.navigate('Details', { id, category, title })}
          variant='ghost'
        >
          More Details
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  crad: {
    alignItems: "center",
    marginTop: "5",
  },
  image: {
    p: "2%",
    justifyContent: "center"
  },
  textWrapper: {
    padding: "2%",
    justifyContent: "center"
  }
})

export default MovieCard