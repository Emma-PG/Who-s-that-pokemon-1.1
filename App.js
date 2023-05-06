import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [sourcePokemon, setSourcePokemon] = useState(null)
  const [click, setClick] = useState(true)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(data => data.json())
      .then(json => {
        console.log(json.sprites.other["official-artwork"].front_default);
        setSourcePokemon(json.sprites.other["official-artwork"].front_default);
      })

  }, [click]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess the Pokemon !</Text>
      <Image style={styles.img} source={{
        uri: sourcePokemon
      }} />
      <StatusBar style="light" />
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
  text: {
    fontSize: 30,
    margin: 10
  },
  img: {
    width: 200,
    height: 200,
    aspectRatio: 3 / 2,
    resizeMode: "contain",
    margin: 10
  }
});
