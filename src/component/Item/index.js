import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Item = ({image, username, firstname, lastname, onPress}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          resizeMode: 'contain',
          marginRight: 10,
          marginLeft: 10,
        }}
        source={image}
      />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.name}>
          {firstname} {lastname}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 5,
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    color: '#020202',
    fontFamily: 'Poppins-Bold',
  },
  name: {
    fontSize: 12,
    color: '#8d92a3',
    fontFamily: 'Poppins-Bold',
  },
});
