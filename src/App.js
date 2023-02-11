import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {person} from './assets';
import {Header, Item} from './component';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App: () => Node = () => {
  const [data, setData] = React.useState([]);
  const [detail, setDetail] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  const getDataFakeStore = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setData(data);
  };

  const getDetailFakeStore = async id => {
    console.log(id);
    // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // fetching with axios
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const data = await response.data;
    setDetail(data);
  };

  const onHandleModal = id => {
    getDetailFakeStore(id);
    setModalVisible(true);
  };

  useEffect(() => {
    getDataFakeStore();
  }, []);

  console.log('data', data);
  console.log('detail', detail);

  return (
    <SafeAreaView style={styles.page}>
      <Header name={'DNCC'} />
      <ScrollView>
        <View style={styles.item}>
          {data.map((item, index) => (
            <Item
              key={index}
              image={person}
              username={item.username}
              firstname={item.name}
              onPress={() => onHandleModal(item.id)}
            />
          ))}
        </View>
      </ScrollView>
      {modalVisible && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#FFC700',
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 10,
              elevation: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                }}>
                Detail
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text>Username : {detail.username}</Text>
            <Text>nama : {detail.name}</Text>
            <Text>email : {detail.email}</Text>
            <Text>Phone : {detail.phone}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
  },
});

export default App;
