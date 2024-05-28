import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
/**
 * SCALING STUFF
 */
const { height, width } = Dimensions.get('window');
const HEADER_HEIGHT = height * 0.20;
const LEFT_MARGIN = width * 0.2;

const ProfileHeader = ({ profileImage, username, bio }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
      <TouchableHighlight
        style={styles.logoutButton}
        // onPress={onLogout}
        underlayColor="#68A77C" // Color when pressed, doesn't work yet
      >
        <AntDesign name="logout" size={20} color="#2D5A3D" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingLeft: 40,
    backgroundColor: '#C4D8BF', // DARK/LIGHT MODE
    marginBottom: -20, // Negative margin to reduce space between header and next item
  },
  profileImage: {
    width: HEADER_HEIGHT * 0.50, // Adjust the size to fit your design
    height: HEADER_HEIGHT * 0.50,
    borderRadius: (HEADER_HEIGHT * 0.6) / 2,
    marginRight: 10,
  },
  textContainer: {
    padding: 12,
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D5A3D',
  },
  bio: {
    fontSize: 14,
    color: '#2D5A3D',
  },
  logoutButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 10,
    borderRadius: 5,
  }
});

export default ProfileHeader;
