import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image, ImageBackground } from "react-native";
import { Block, BlockExercise } from "@/app/types";

const styles = {
  workSans: {
    600: { fontFamily: "WorkSans_600SemiBold" },
    400: { fontFamily: "WorkSans_400Regular" },
  },
  openSans: {
    600: { fontFamily: "OpenSans_600SemiBold" },
    400: { fontFamily: "OpenSans_400Regular" },
  },
};

export const SetInfo = ({
  block,
  be,
  bg,
}: {
  block: Block;
  be: BlockExercise;
  bg: { backgroundColor: string };
}) => {
  return (
    <>
      <ThemedView
        style={{
          width: 90,
          height: 110,
          borderRadius: 25,
          alignSelf: "flex-end",
          overflow: "hidden",
        }}
      >
        <ImageBackground
          style={{
            width: 90,
            height: 110,
            borderRadius: 25,
          }}
          source={{ uri: be.exercise.info }}
        ></ImageBackground>
      </ThemedView>
      <ThemedView style={{ width: "50%" }}>
        <ThemedText
          style={[
            {
              fontWeight: 600,
              color: "#262C45",
              lineHeight: 20,
            },
            bg,
            styles.workSans[600],
          ]}
        >
          {be.exercise.name}
        </ThemedText>
        <ThemedText
          style={[
            {
              color: "#262C45A6",
              fontSize: 12,
            },
            bg,
          ]}
        >
          {block.setCount} sets x{" "}
          {be.durationBase && (
            <ThemedText
              style={{
                fontWeight: 600,
                color: "#262C45A6",
                opacity: 0.7,
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              {be.durationBase} sec.
            </ThemedText>
          )}
          {be.repBase && (
            <ThemedText
              style={{
                fontWeight: 600,
                color: "#262C45A6",
                fontSize: 12,
              }}
            >
              {be.repBase}
              {be.repMax && (
                <ThemedText
                  style={{
                    color: "#262C45A6",
                    fontSize: 12,
                  }}
                >
                  -{be.repMax}
                </ThemedText>
              )}{" "}
              reps
            </ThemedText>
          )}
          {be.weight && (
            <ThemedText style={{ color: "#262C45A6", fontSize: 12 }}>
              {" "}
              x {be.weight} kg
            </ThemedText>
          )}
        </ThemedText>
      </ThemedView>
    </>
  );
};
