// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
var l_lang;
  if (navigator.userLanguage) // Explorer
    l_lang = navigator.userLanguage;
  else if (navigator.language) // FF
    l_lang = navigator.language;
  else
    l_lang = "en";

import React from 'react';
import {Text, View} from 'react-native';
import { View, StyleSheet } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.navBar}>
      {/* Navigation items go here */}
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
  '@keyframes glow': {
    '0%': { backgroundColor: '#ff0000' },
    '50%': { backgroundColor: '#00ff00' },
    '100%': { backgroundColor: '#0000ff' },
  },
});

export default NavigationBar;

const LordLeHomme = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

export default LordLeHomme;