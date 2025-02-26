import { createRoot } from 'node_modules/react-dom/client';
import React from 'node_modules/react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'node_modules/react-native';

var l_lang;
 if (navigator.userLanguage)
  l_lang = navigator.userLanguage;
 else if (navigator.userLanguage)
  l_lang = navigator.language;
 else l_lang = "en";

const navBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transition: 'background-color 2.7s',
    animation: 'glow 2.7s infinite',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#555',
    borderRadius: 5,
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
  '@keyframes glow': {
    '0%': { backgroundColor: '#ff0000' },
    '50%': { backgroundColor: '#00ff00' },
    '100%': { backgroundColor: '#0000ff' },
  },
});

const LordLeHomme = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    </View>
  );
};

export { navBar, LordLeHomme };