import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Flex from "./Flex";
import { Block, BlockExercise } from "@/app/types";
import { Portal } from "@gorhom/portal";
import SimplePopover from "./SimplePopover";
import { useState } from "react";
import { ButtonGroup } from "./ButtonGroup";
import { SetInfo } from "./SetInfo";

type Props = {
  block: Block;
  shuffle: (be: BlockExercise) => void;
};

export function ExerciseBlock(props: Props) {
  const { block, shuffle } = props;

  const [showModal, setShowModal] = useState(false);
  const [config, setConfig] = useState({
    position: "",
    targetLayout: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  });

  const handlePressQuickActions = (event) => {
    const x = event.nativeEvent.pageX;
    const y = event.nativeEvent.pageY;
    console.log(y);
    setConfig({
      position: "bottom",
      targetLayout: {
        x,
        y,
        width: 10,
        height: 20,
      },
    });
    setShowModal(true);
  };

  const handleShuffle = (be: BlockExercise) => {
    shuffle(be);
  };

  const isWarmup = block.section === "warmup";

  const setTypeText = (exerciseCount: number): string | null => {
    if (exerciseCount === 1) {
      return null;
    }

    if (exerciseCount === 2) {
      return "Superset";
    }

    if (exerciseCount === 3) {
      return "Triset";
    }

    if (exerciseCount > 3) {
      return "Circuit";
    }

    return null;
  };

  const len = setTypeText(block.blockExercises.length);
  const bgColor = isWarmup ? styles.warmUpBg : styles.defaultBg;
  const blockStroke = isWarmup ? {} : styles.blockStroke;
  const exerciseBgColor = isWarmup
    ? styles.warmUpExerciseBg
    : styles.defaultExerciseBg;

  const connectorStyle =
    block.order > 0 && block.order !== 2
      ? styles.connectorContainer
      : styles.nonConnectorContainer;

  const connectorColor = isWarmup
    ? styles.warmUpConnectorColor
    : styles.connectorColor;

  return (
    <ThemedView style={[bgColor]}>
      <ThemedView style={{ ...connectorStyle, ...connectorColor }}>
        {len ? (
          <ThemedText
            style={[
              {
                marginStart: 10,
                textTransform: "uppercase",
                color: "#3D4156",
                opacity: 0.5,
                marginBottom: 5,
                marginTop: 20,
                borderLeftWidth: 3,
              },
              styles.workSans[600],
            ]}
          >
            {" "}
            {len} • {block.setCount} Rounds
          </ThemedText>
        ) : (
          <ThemedView
            style={[
              {
                marginStart: 10,
                opacity: 0.5,
                marginBottom: 5,
                marginTop: 20,
                borderLeftWidth: 3,
              },
            ]}
          ></ThemedView>
        )}
      </ThemedView>
      <ThemedView style={[styles.blockContainer, exerciseBgColor, blockStroke]}>
        {[...block.blockExercises]
          .sort((a, b) => a.order - b.order)
          .map((be) => {
            return (
              <ThemedView
                key={be.id}
                style={[
                  styles.blockContainer,
                  styles.blockInner,
                  exerciseBgColor,
                ]}
              >
                <Flex
                  direction="row"
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <SetInfo block={block} be={be} bg={exerciseBgColor} />
                  <ButtonGroup
                    isWarmup={isWarmup}
                    shuffle={() => handleShuffle(be)}
                    handlePressQuickActions={handlePressQuickActions}
                  />
                </Flex>
              </ThemedView>
            );
          })}
      </ThemedView>
      {showModal && (
        <Portal>
          <SimplePopover {...config} onPress={() => setShowModal(false)} />
        </Portal>
      )}
    </ThemedView>
  );
}

const styles = {
  blockContainer: {
    flex: 1,
    paddingVertical: 5,
    margin: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "flex-start",
  },
  blockInner: {
    borderWidth: 0,
    paddingVertical: 0,
  },
  warmUpBg: {
    backgroundColor: "rgba(247, 235, 250, 1)",
  },
  defaultBg: {
    backgroundColor: "white",
  },
  warmUpExerciseBg: {
    backgroundColor: "rgba(249, 240, 251, 1)",
  },
  defaultExerciseBg: {
    backgroundColor: "white",
  },
  blockStroke: {
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  workSans: {
    600: { fontFamily: "WorkSans_600SemiBold" },
    400: { fontFamily: "WorkSans_400Regular" },
  },
  openSans: {
    600: { fontFamily: "OpenSans_600SemiBold" },
    400: { fontFamily: "OpenSans_400Regular" },
  },
  connectorContainer: {
    marginStart: 45,
    marginBottom: -10,
    marginTop: -8,
    borderLeftWidth: 2,
    backgroundColor: "transparent",
  },
  nonConnectorContainer: {
    marginStart: 45,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "transparent",
  },
  warmUpConnectorColor: {
    borderLeftColor: "white",
  },
  connectorColor: {
    borderLeftColor: "#E9E9E9",
  },
};
