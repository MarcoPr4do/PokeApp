/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingActionButton = () => {
  const [activateButton, setActivateButton] = useState(false);
  return (
    <ActionButton
      buttonColor="#6C79DB"
      renderIcon={(active) =>
        active ? (
          <Image
            source={require('../../assets/images/icons/cross.png')}
            style={[styles.actionButtonIcon, {width: 24}]}
          />
        ) : (
            <Image
            source={require('../../assets/images/icons/filter.png')}
            style={[styles.actionButtonIcon, {width: 24}]}
          />
        )
      }>
      <ActionButton.Item
        buttonColor="white"
        title="Favourite Pokemon"
        onPress={() => console.log('notes tapped!')}>
        <Image
          source={require('../../assets/images/icons/heart.png')}
          style={[styles.actionButtonIcon, {width: 24}]}
        />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="white"
        title="All Type"
        onPress={() => {}}>
        <Image
          source={require('../../assets/images/icons/pokeball.png')}
          style={styles.actionButtonIcon}
        />
      </ActionButton.Item>
      <ActionButton.Item buttonColor="white" title="All gen" onPress={() => {}}>
        <Image
          source={require('../../assets/images/icons/pokeball.png')}
          style={styles.actionButtonIcon}
        />
      </ActionButton.Item>
      <ActionButton.Item buttonColor="white" title="Search" onPress={() => {}}>
        <Image
          source={require('../../assets/images/icons/search.png')}
          style={styles.actionButtonIcon}
        />
      </ActionButton.Item>
    </ActionButton>
  );
};
export default FloatingActionButton;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 25,
    height: 20,
    width: 20,
    // color: 'white',
  },
});
