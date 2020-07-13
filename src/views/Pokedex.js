/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import pokemons from '../data/pokemonData';
import PokemonItem from '../components/PokemonItem';
import FloatingActionButton from '../components/FloatingActionButton';

const Pokedex = () => {
  const navigation = useNavigation();
  const pokemonItem = ({item, index}) => (
    <PokemonItem key={index} pokemon={item} />
  );
  return (
    <>
      <Pokemons
        ListHeaderComponent={
          <Fragment>
            <ImagePokeboll
              source={require('../../assets/images/pokeboll_dashboard.png')}
            />
            <HeaderPokedex>
              <TouchableWithoutFeedback
                onPress={() => navigation.goBack()}
                style={styles.buttonBack}>
                <ImageIcon
                  source={require('../../assets/images/icons/arrow-left.png')}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {}}>
                <ImageIcon
                  source={require('../../assets/images/icons/list.png')}
                />
              </TouchableWithoutFeedback>
            </HeaderPokedex>
            <Title>Pokedex</Title>
          </Fragment>
        }
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={pokemons}
        renderItem={pokemonItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<FooterContainer />}
      />
      <FloatingActionButton />
    </>
  );
};
export default Pokedex;

const styles = StyleSheet.create({
  buttonBack: {paddingRight: 10, paddingVertical: 10},
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

const ImageIcon = styled.Image``;

const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  margin: 0 20px 15px 20px;
`;

const ImagePokeboll = styled.Image`
  right: 0;
  position: absolute;
`;

const Pokemons = styled.FlatList`
  flex-direction: column;

  /* padding: 0 20px */
`;

const HeaderPokedex = styled.View`
  margin: 0 20px;
  padding: 57px 0 15px 0;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterContainer = styled.View`
  width: 100%;
  height: 80px;
`;
