import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const candice =
  "https://s3-alpha-sig.figma.com/img/f8e5/6c72/2db22f426b0255cdf7546ad15f982ca4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8Rw~tLb2V1e38BFCpSgo-3pikxSwpu0L6bWPyeeBH9L7geZNEL6LGJ8acB-LT2gl-T1THMHQNeFD7atmMeYz-CzQxDiXOdIxIQvxLMsBIxE044wdj~Jw5moUa9CNP0WMA9xaf0iFPDenJ55nnYpM~uWmCHcWRnyrQGfpueop44S9oKBgGXSOdLDnqZVkP--ubcr9aVHqnFl3WihnwdwzGxvdvLBKxhGxBiar8VnwPX7eGYFiBqBlRhqpf3-RFAAAYQtn4NlPDRMtL2WXTLXnC6HKdVXXvu4Q-N9gzb8j3q0nGJUDFQCTmjSM9M8KI9pEW6HSaVpOL2eGVbkjmRTAQ__";

export default function WorkoutScreen() {
  return (
    <SafeAreaView style={styles.safeAreaPadding}>
      <ThemedView>
        <ThemedText style={styles.heading}>Workouts</ThemedText>
      </ThemedView>
      <ScrollView style={styles.workoutsScrollContainer}>
        <ThemedView style={styles.workoutCardContainer}>
          <Pressable onPress={() => router.push("/workouts/1")}>
            <ImageBackground
              source={{ uri: candice }}
              resizeMode="cover"
              style={styles.image}
            >
              <ThemedView style={styles.workoutBrief}>
                <ThemedText style={styles.workoutBriefText}>
                  Full Body with Candice
                </ThemedText>
              </ThemedView>
            </ImageBackground>
          </Pressable>
        </ThemedView>
        {/*  */}
        <ThemedView style={styles.workoutCardContainer}>
          <Pressable>
            <ImageBackground
              source={{ uri: candice }}
              resizeMode="cover"
              style={styles.image}
            >
              <ThemedView style={styles.workoutBrief}>
                <ThemedText style={styles.workoutBriefText}>
                  Full Body with Candace
                </ThemedText>
              </ThemedView>
            </ImageBackground>
          </Pressable>
        </ThemedView>
        {/*  */}
      </ScrollView>
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
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  pageContainer: {
    height: "auto",
  },
  workoutsScrollContainer: {
    padding: 10,
    height: 1000,
    borderBottomWidth: 2,
  },
  workoutCardContainer: {
    marginBottom: 10,
    borderRadius: 10,
    height: 200,
    overflow: "hidden",
  },
  workoutBrief: {
    position: "absolute",
    paddingEnd: 8,
    paddingBottom: 4,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .4)",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  workoutBriefText: {
    color: "white",
    fontWeight: 600,
    textAlign: "right",
  },
  workoutCardInner: {
    fontSize: 30,
  },
});
