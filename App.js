import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';

export default function App() {

  return (    
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello User, I'm your new App!</Text>
      <Text></Text>
      <Button
        title="Learn more!"
        onPress={() => Alert.alert('It was my first project coding in React Native. The project was built in 2024!')}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Couchin'
  },
  defaultText: {
    fontSize: 15,
    fontFamily: 'Couchin'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
