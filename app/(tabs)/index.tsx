import React from 'react';
import { Image, Button, StyleSheet, TextInput, Keyboard, ActivityIndicator, Modal, View, Text} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [searchValue, onChangeSearchValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(false);


  const searching = () => {
    //needs to set condition for if search successful then navigate else display error
    setLoading(true);
    // Simulate an asynchronous task
    setTimeout(() => {
      setLoading(false);
      setAlertVisible(true);
    }, 2000);

  };
  const closeAlert = () => {
    setAlertVisible(false);
  };


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
                onSubmitEditing={() => { Keyboard.dismiss; searching() }}
              />
            </SafeAreaView>
          </SafeAreaProvider>
          <SafeAreaProvider>
            <SafeAreaView>
              <Modal visible={loading} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.loadingText}>Loading...</Text>
                  </View>
                </View>
              </Modal>
              <Modal visible={alertVisible} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <Text style={styles.alertText}>Search Successful</Text>
                    {/* need function to send string to AI agent */}
                    <Button color={'#80EF80'} title="OK" onPress={ closeAlert} />
                  </View>
                </View>
              </Modal>
            </SafeAreaView>
          </SafeAreaProvider>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  parent:{
    backgroundColor:'blue'
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    height: 40,
    width: 200,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  alertText: {
    fontSize: 18,
    marginBottom: 10,
  },
  navigateBtn:{
    color:'#88E788'
  }
});
