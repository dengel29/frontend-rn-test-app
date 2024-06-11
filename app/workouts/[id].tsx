import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { Block, BlockExercise, Workout } from "../types";
import { useFonts } from "expo-font";

import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";
import {
  WorkSans_400Regular,
  WorkSans_600SemiBold,
} from "@expo-google-fonts/work-sans";
import { WorkoutTopSection } from "@/components/WorkoutTopSection";

const WorkoutScreen = () => {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    WorkSans_600SemiBold,
    WorkSans_400Regular,
  });

  const { loading, error, data } = useQuery<{ workout: Workout }>(
    GET_WORKOUT_WITH_BLOCKS
  );

  if (loading) return <ThemedText>"Loading..."</ThemedText>;
  if (error) return <ThemedText>`Error! ${error?.message}`</ThemedText>;
  const workout = data?.workout;

  if (!workout)
    return <ThemedText>"An error getting the workout..."</ThemedText>;

  return (
    <ThemedView style={{ paddingTop: 10 }}>
      <ScrollView>
      </ScrollView>
    </ThemedView>
  );
};

export default WorkoutScreen;
