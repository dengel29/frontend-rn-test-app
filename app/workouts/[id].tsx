import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORKOUT_WITH_BLOCKS, REPLACE_EXERCISE } from "../queries/workout";
import { Block, BlockExercise, Workout } from "../types";
import { WorkoutSection } from "@/components/WorkoutSection";
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
  const [replaceExercise] = useMutation<{
    replaceExercise: { blocks: Block[] };
  }>(REPLACE_EXERCISE, {
    refetchQueries: [GET_WORKOUT_WITH_BLOCKS],
  });

  if (loading) return <ThemedText>"Loading..."</ThemedText>;
  if (error) return <ThemedText>`Error! ${error?.message}`</ThemedText>;
  const workout = data?.workout;

  if (!workout)
    return <ThemedText>"An error getting the workout..."</ThemedText>;

  // organize the workout sections into warmup and rest
  const warmup: Block[] = [];
  const main: Block[] = [];
  workout.blocks.forEach((b) =>
    b.section === "warmup" ? warmup.push(b) : main.push(b)
  );

  const shuffleExercise = (be: BlockExercise) => {
    const payload = {
      blockExerciseId: be.id,
      workoutId: workout.id,
      fromBlockId: be.blockId,
      fromOrder: be.order,
      swappedForBlockExerciseId: be.swappedForBlockExerciseId || null,
    };
    replaceExercise({ variables: { input: payload } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemedView style={{ paddingTop: 10 }}>
      <ScrollView>
        <WorkoutTopSection workout={workout} />
        <WorkoutSection
          sectionName="Warm-Up"
          collapsible={true}
          blocks={warmup}
          duration={5}
          shuffle={shuffleExercise}
        />
        <WorkoutSection
          sectionName="Workout"
          collapsible={false}
          blocks={main}
          duration={60}
          shuffle={shuffleExercise}
        />
      </ScrollView>
    </ThemedView>
  );
};

export default WorkoutScreen;
