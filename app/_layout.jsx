import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Apprentice Watch</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8040",
    alignItems: "center",
    justifyContent: "center",
  },
})