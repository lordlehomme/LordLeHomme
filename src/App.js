import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

const l_lang = navigator.language || "en";

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
      <Text>Welcome to LordLeHomme</Text>
    </View>
  );
};

export default LordLeHomme;