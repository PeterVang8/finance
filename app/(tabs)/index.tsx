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
    // clear search
    onChangeSearchValue("");
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#C1D7CA', dark: '#C1D7CA' }}
      headerImage={
        // AI agent image
        <Image
          source={require('@/assets/images/FinanceLogot.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        {/* <ThemedText type="title">AI Finance</ThemedText> */}
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
                    <ActivityIndicator size="large" color="#C1D7CA" />
                    <Text style={styles.loadingText}>Loading...</Text>
                  </View>
                </View>
              </Modal>
              <Modal visible={alertVisible} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <Text style={styles.alertText}>Search Successful</Text>
                    {/* need function to send string to AI agent */}
                    <Button color={'#C1D7CA'} title="OK" onPress={ closeAlert} />
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
    maxHeight: 250,
    maxWidth: 250,
    flex:1,
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
