import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import ToastNotification from './ToastNotification';
import api from '../services/api';
import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

const Main = ({ navigation }) => {

  const userId = navigation.getParam('user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`/devs/${userId}`);
      setUsers(response.data);
    }

    loadUsers();
  }, [userId]);

  const handleLike = async () => {
    const [user, ...rest] = users;
    await api.post(`devs/${user._id}/likes`, null, { headers: { user: userId } });
    setUsers(rest);

    // const targetDev = await api.get(`/dev/${user._id}`);
    // const match = targetDev?.data?.likes.includes(userId);
    // const match = true;
    // if (match) {
      // ToastNotification.setMessages([...messages, message]);
    // }
  }

  const handleDislike = async () => {
    const [user, ...rest] = users;
    await api.post(`devs/${user._id}/dislikes`, null, { headers: { user: userId } });
    setUsers(rest);
  }

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  const hasAnyUser = users.length > 0;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handleLogout}>
          <Image source={logo} />
        </TouchableOpacity>

        <View style={styles.blocks}>
          {!hasAnyUser
            ? <Text style={styles.emptyBlocks}>THIS IS THE END</Text>
            : users.map((user, index) => (
              <View
                key={user._id}
                style={[styles.block, { zIndex: users.length - index }]}>

                <Image
                  style={styles.avatar}
                  source={{ uri: user.avatar }} />

                <View style={styles.footer}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.bio} numberOfLines={3}>
                    {user.bio}
                  </Text>
                </View>
              </View>
            ))
          }
        </View>

        {hasAnyUser &&
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDislike}>
              <Image source={dislike} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.heart]}
              onPress={handleLike}>
              <Image source={like} />
            </TouchableOpacity>
          </View>
        }
      </SafeAreaView>

      {/* <ToastNotification /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },

  avatar: {
    flex: 1,
    height: 300
  },

  blocks: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500
  },

  emptyBlocks: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 150
  },

  block: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },

  bio: {
    fontSize: 14,
    color: '#999',
    lineHeight: 20
  },

  buttons: {
    flexDirection: 'row',
    marginBottom: 30
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2
  },

  heart: {
    paddingTop: 4
  }
});

export default Main;