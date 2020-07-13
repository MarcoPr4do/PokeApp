/* eslint-disable prettier/prettier */
import React, {Component, Fragment, useState} from 'react';
import styled from 'styled-components';
import {Icon, Input} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [serachPokemon, setSearchPokemon] = useState('');
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Fragment>
          <PokeInfo>
            <ImagePokeboll
              source={require('../../assets/images/pokeboll_dashboard.png')}
            />
            <Title>What Pokemon{'\n'}are you lokking for? </Title>
            <Search>
              <ViewIcon>
                <Icon
                  name="search"
                  type="FontAwesome"
                  style={{
                    color: '#303943',
                    fontSize: 20,
                  }}
                />
              </ViewIcon>
              <Input
                style={{fontSize: 15}}
                placeholderTextColor="#A6AAAE"
                value={serachPokemon}
                onChangeText={(text) => setSearchPokemon(text)}
                placeholder="Search Pokemon, Move, Ability etc"
              />
            </Search>
            <PokeOptions>
              <TouchableOpacity
                onPress={() => navigation.navigate('Pokedex')}
                style={styles.buttonOption}>
                <ImageOption
                  source={require('../../assets/images/Pokedex.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
                <ImageOption
                  source={require('../../assets/images/Moves.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
                <ImageOption
                  source={require('../../assets/images/Abilities.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
                <ImageOption
                  source={require('../../assets/images/Items.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
                <ImageOption
                  source={require('../../assets/images/Location.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
                <ImageOption source={require('../../assets/images/Type.png')} />
              </TouchableOpacity>
            </PokeOptions>
          </PokeInfo>
          <PokeNews>
            <BarNews>
              <Text style={styles.titleNews}>Pokemon News</Text>
              <TouchableOpacity>
                <Text style={styles.linkAll}>View All</Text>
              </TouchableOpacity>
            </BarNews>
            <BodyNew>
              <ItemNews>
                <InfoNews>
                  <Text
                    style={{
                      color: '#303943',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Pokemon Rumble Rush Arrives Soon
                  </Text>
                  <Text style={{color: '#303943'}}>15 May 2020</Text>
                </InfoNews>
                <ImageNewsContainer>
                  <ImageNews
                    source={require('../../assets/images/News1.png')}
                  />
                </ImageNewsContainer>
              </ItemNews>
              <DividerNews></DividerNews>
              <ItemNews>
                <InfoNews>
                  <Text
                    style={{
                      color: '#303943',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Detective Pikachu Sleuths into Pokémon GO
                  </Text>
                  <Text style={{color: '#303943'}}>15 May 2019</Text>
                </InfoNews>
                <ImageNewsContainer>
                  <ImageNews
                    source={require('../../assets/images/News2.png')}
                  />
                </ImageNewsContainer>
              </ItemNews>
            </BodyNew>
          </PokeNews>
        </Fragment>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;
const ScrollView = styled.ScrollView``;
const ImagePokeboll = styled.Image`
  right: 0;
  position: absolute;
`;
const Title = styled.Text`
  margin-top: 110px;
  font-size: 32px;
  font-weight: bold;
  /* padding-left: 20px; */
  color: #303943;
`;
const PokeInfo = styled.View`
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 0 20px;
  background-color: #fff;
`;
const Search = styled.View`
  flex-direction: row;
  margin: 25px 0;
  background-color: #f5f5f5;
  border-radius: 3000px;
`;
const ViewIcon = styled.View`
  justify-content: center;
  margin: 0 10px;
`;
const PokeOptions = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin: 10px 20px; */
`;
const ImageOption = styled.Image``;
const PokeNews = styled.View`
  padding: 0 20px;
`;
const BarNews = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 0 10px 0;
  /* margin-left: */
`;

const BodyNew = styled.View``;
const ItemNews = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0 15px 0;
`;
const InfoNews = styled.View`
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;
const ImageNewsContainer = styled.View`
  flex: 1;
`;
const ImageNews = styled.Image`
  border-radius: 25px;
  width: 170px;
  height: 100px;
`;

const DividerNews = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ebebeb;
  margin-bottom: 15px;
`;
const styles = StyleSheet.create({
  buttonOption: {
    flexBasis: '49%',
    right: 9,
  },
  titleNews: {
    color: '#303943',
    fontSize: 22,
    fontWeight: 'bold',
  },
  linkAll: {
    color: '#6C79DB',
    fontSize: 17,
  },
});
