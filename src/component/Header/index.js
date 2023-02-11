import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({name}) => {
  return (
    <View style={styles.header}>
      <AntDesign name="API" size={24} color="black" />
      <Text style={styles.txt}>{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
