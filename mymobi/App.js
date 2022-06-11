import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Alert, Button,Image } from 'react-native';
import DisplayComponent from './component/DisplayComponent';
const url = "https://zomatoajulypi.herokuapp.com/restaurant"

export default function App() {

  const [title,setTitle] = useState('React Native App');
  const [rest, setRest] = useState();

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    })
  },[])

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button
        onPress={() => {setTitle('Title After Clicked')}}
        title="Learn More"
        color="#841584"
      />
      <Button
        onPress={() => {setTitle('Title Before Clicked')}}
        title="Learn More"
        color="#6EA0DE"
      />
     <DisplayComponent restList={rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 250,
    height: 250,
  }
});
