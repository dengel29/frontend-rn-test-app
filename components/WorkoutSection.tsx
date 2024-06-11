import { Block, BlockExercise } from "@/app/types";
import { StyleSheet, Switch, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { ExerciseBlock } from "./ExerciseBlock";
import Flex from "./Flex";

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
