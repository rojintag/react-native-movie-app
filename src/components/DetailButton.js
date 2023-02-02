import { Button } from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

const ButtonDetail = props => {
  <View>
    <Button title={ 'MoreDetails' } style= {styles.button} onPress= {props.onClick}></Button>
  </View>
}

const styles= StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: '20px',
    width: '45vw',
  }
})

export default ButtonDetail