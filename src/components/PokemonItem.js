/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const PokemonItem = ({pokemon}) => {
  const {
    name,
    types,
    typeBg,
    image,
    colorText,
    backgroundColor,
    pokeballBg,
    numberPokemon,
    colorImagePokeball,
  } = pokemon;
  return (
    <View style={styles.container}>
      <View style={[styles.containerBg, {backgroundColor: backgroundColor}]} />
      <View style={styles.containerImageBg}>
        <Image
          source={pokeballBg}
          style={[styles.imageBg, {tintColor: colorImagePokeball}]}
        />
        <View style={styles.containerInfo}>
          <View style={styles.containerDescription}>
            <Text style={styles.textName}>{name}</Text>
            {types.map((type) => (
              <View style={[styles.containerType, {backgroundColor: typeBg}]}>
                <Text style={styles.textType}>{type}</Text>
              </View>
            ))}
          </View>
          <View style={styles.containerImagePk}>
            <View style={styles.containerNumberPk}>
              <Text style={[styles.textNumber, {color: colorText}]}>
                {numberPokemon}
              </Text>
            </View>
            <Image source={image} style={styles.imagePokemon} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default PokemonItem;

const styles = StyleSheet.create({
  container: {
    // width: '0%',
    height: 130,
    flexBasis: '48.5%',
    marginVertical: 6,
    // paddignHorizontal: 20
  },
  containerBg: {
    // backgroundColor: '#48D0B0',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 22,
  },
  containerImageBg: {
    width: '100%',
    height: '100%',
  },
  imageBg: {
    width: 90,
    height: 80,
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 30,
    position: 'absolute',
  },
  containerInfo: {
    flexDirection: 'row',
  },
  containerDescription: {
    flexDirection: 'column',
    paddingLeft: 13,
    paddingTop: 7,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
    color: '#fff',
  },
  containerType: {
    marginVertical: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 38,
    backgroundColor: '#5DDFC6',
    alignSelf: 'flex-start',
  },
  textType: {fontSize: 11, color: '#fff'},
  containerImagePk: {
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
  },
  containerNumberPk: {
    flexDirection: 'row',
    right: 14,
    top: 8,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  textNumber: {
    fontFamily: 'Circular Std',
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.12,
    color: '#3E8570',
  },
  imagePokemon: {
    width: 85,
    // maxWidth: 90,
    // position: 'ab'
    height: 85,
    // top: 20,
    top: 17,
    right: 5,
  },
});
