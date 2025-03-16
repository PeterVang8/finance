import React from 'react';
import { Image, Alert, Button, StyleSheet, TextInput, Keyboard, ActivityIndicator } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [searchValue, onChangeSearchValue] = React.useState('');

  const createTwoButtonAlert = (value:string) =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: value,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">AI Finance</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Search: </ThemedText>
        <ThemedText>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Click here…"
                onChangeText={onChangeSearchValue}
                value={searchValue}
                onSubmitEditing={() => { Keyboard.dismiss; createTwoButtonAlert(searchValue)}}
              />
              <Button
                onPress={() => createTwoButtonAlert(searchValue)}
                title="Search"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
              />
            </SafeAreaView>
          </SafeAreaProvider>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  off:{
    display: 'none'
  },
  on:{
    display:'flex'
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  status: {
    padding: 16,
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
