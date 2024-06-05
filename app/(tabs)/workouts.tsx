import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
export default function WorkoutScreen() {
  return (
    <SafeAreaView style={styles.safeAreaPadding}>
      <ThemedView>
        <ThemedText style={styles.heading}>Workouts</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    padding: 10,
  },
  safeAreaPadding: {
    paddingTop: 10,
  },
});
