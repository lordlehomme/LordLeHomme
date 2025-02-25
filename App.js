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