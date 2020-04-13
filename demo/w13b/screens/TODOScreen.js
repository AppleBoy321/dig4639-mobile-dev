import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function TODOScreen() {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.imageStyle}
          source={require('../assets/images/Commons-Cat.png')}
        />
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
      </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width:Dimensions.get("window").width,
    height:(685/1024)*Dimensions.get("window").width
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})