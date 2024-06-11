import { Block, BlockExercise } from "@/app/types";
import { StyleSheet, Switch, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { ExerciseBlock } from "./ExerciseBlock";
import { Collapsible } from "./Collapsible";
import Flex from "./Flex";

import { useState } from "react";

type Props = {
  sectionName: "Warm-Up" | "Workout";
  collapsible: boolean;
  blocks: Block[];
  duration: number;
  exerciseCount: number;
  toggleSwitch?: () => void;
  isEnabled?: boolean;
  shuffle: (be: BlockExercise) => void;
};

type InfoHeaderProps = Omit<Props, "blocks" | "shuffle">;

const InfoHeader = ({
  sectionName,
  collapsible,
  exerciseCount,
  duration,
  toggleSwitch,
  isEnabled = true,
}: InfoHeaderProps) => {
  const styles = {
    workSans: {
      600: { fontFamily: "WorkSans_600SemiBold" },
      400: { fontFamily: "WorkSans_400Regular" },
    },
    openSans: {
      600: { fontFamily: "OpenSans_600SemiBold" },
      400: { fontFamily: "OpenSans_400Regular" },
    },
    switchStyle: { marginLeft: "auto", marginRight: "10%" },
  };

  return (
    <View>
      <Flex direction="row" style={{ marginStart: 30, alignItems: "center" }}>
        <View style={{ marginTop: 10 }}>
          <ThemedText
            style={[styles.workSans[600], { fontSize: 24, lineHeight: 30 }]}
          >
            {sectionName}
          </ThemedText>
          <ThemedText
            style={[styles.openSans[400], { fontSize: 14, letterSpacing: 1 }]}
          >
            {duration} Min • {exerciseCount} Exercises
          </ThemedText>
        </View>
        {collapsible && (
          <Switch
            style={styles.switchStyle}
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{ false: "", true: "#262C45" }}
          />
        )}
      </Flex>
    </View>
  );
};

type WorkoutSectionProps = Omit<
  Props,
  "exerciseCount" | "toggleSwitch" | "isEnabled"
>;

export function WorkoutSection(props: WorkoutSectionProps) {
  const { sectionName, collapsible, blocks, duration, shuffle } = props;
  const isWarmup = sectionName === "Warm-Up";
  const exerciseCount = blocks.reduce(
    (count, current) => count + current.blockExercises.length,
    0
  );

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const bgColor = isWarmup ? styles.warmUpBg : styles.defaultBg;
  return (
    <ThemedView style={[styles.sectionContainer, bgColor]}>
      <InfoHeader
        collapsible={collapsible}
        sectionName={sectionName}
        duration={duration}
        exerciseCount={exerciseCount}
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
      />
      <Collapsible isOpen={isEnabled}>
        {blocks.map((block) => {
          return (
            <ExerciseBlock
              key={block.id}
              block={block}
              shuffle={shuffle}
            ></ExerciseBlock>
          );
        })}
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 30,
    paddingBottom: 5,
    overflow: "hidden",
  },
  warmUpBg: {
    backgroundColor: "rgba(247, 235, 250, 1)",
  },
  defaultBg: {
    backgroundColor: "white",
  },
});
