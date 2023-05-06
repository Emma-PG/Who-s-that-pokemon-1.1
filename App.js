import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, Button, TextInput, View } from 'react-native';

export default function App() {
  const [sourcePokemon, setSourcePokemon] = useState(null)
  const [name, setName] = useState('null')
  const [click, setClick] = useState(true)//test
  const [show, setShow] = useState('#212121')
  const [pokemon, setPokemon] = useState('')
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150) + 1}`) //functionality
      .then(data => data.json())
      .then(json => {
        setName(json.name);
        setSourcePokemon(json.sprites.other["official-artwork"].front_default);
      })

  }, [click]);

  const handleClick = () => {
    setClick(!click)//test random when you win 
    setShow(null)// test when you win
    setPokemon('')
  }

  const handleTextChange = () => {
    setPokemon()
  }

  const inputSize = (name = 'asd') => {
    const inputs = []
    for (let i = 0; i < name.length; i++) {
      inputs.push(
        <TextInput key={name[i]} autoCapitalize='characters' onChangeText={handleTextChange} value={pokemon} keyboardType='web-search' maxLength={1} style={styles.input} placeholder='' />
      )


    }
    return inputs
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Guess the Pokemon ! {name}</Text>
      <Image style={{
        width: 200,
        height: 200,
        aspectRatio: 3 / 2,
        resizeMode: "contain",
        margin: 10,
        tintColor: show
      }} source={{
        uri: sourcePokemon
      }} />
      {
        <View style={{ flexDirection: 'row', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>

          {
            inputSize(name)
          }



        </View>

      }
      <Button title='Button' onPress={handleClick} />
      <StatusBar style="dark" />
    </SafeAreaView>
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
    margin: 10,
    textAlign: 'center'
  },
  input: {
    fontSize: 32,
    width: 40,
    height: 50,
    textAlign: 'center',
    borderColor: '#ddd',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2
  },
});
