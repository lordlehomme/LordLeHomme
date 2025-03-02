import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'node_modules/react-native';

var l_lang;
 if (navigator.userLanguage)
  l_lang = navigator.userLanguage;
 else if (navigator.userLanguage)
  l_lang = navigator.language;
 else l_lang = "en";

const styles = StyleSheet.create({
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

export default LordLeHomme;