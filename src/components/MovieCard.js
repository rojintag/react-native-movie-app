import { StyleSheet, View, Image, Text } from 'react-native';

const MovieCard = props => {
  <View>
    <Image
      style={styles.image}
      src={props.image}
    />
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Popularity:</Text>
      <Text style={styles.text}>{props.popularity}</Text>
    </View>
    <Text style={styles.text}>Release Date:</Text>
    <Text style={styles.text}>{props.date}</Text>
  </View>
}
const styles = StyleSheet.create({
  crad: {

  },
  image: {

  },
  title: {

  },
  text: {

  },
  textWrapper: {

  }
})

export default MovieCard