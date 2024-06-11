import React, { useCallback, useMemo, useState } from "react";
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ThemedView } from "./ThemedView";
import Flex from "./Flex";
import { ThemedText } from "./ThemedText";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const SPACE = 5;

interface SimplePopoverProps {
  position: "top" | "bottom";
  targetLayout: LayoutRectangle;
  onPress: (event: GestureResponderEvent) => void;
}

const SimplePopover = ({
  position,
  targetLayout,
  onPress,
}: SimplePopoverProps) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const popoverPosition = useMemo(
    () => ({
      opacity: layout.height === 0 || layout.width === 0 ? 0 : 1,
      top:
        position === "bottom"
          ? targetLayout.y + targetLayout.height + SPACE
          : targetLayout.y - layout.height - SPACE,
      left: targetLayout.x + targetLayout.width / 2 - layout.width / 1.05,
    }),
    [position, layout, targetLayout]
  );

  const popoverContainerStyle = useMemo(
    () => [styles.popoverContainer, popoverPosition],
    [popoverPosition]
  );

  // callbacks
  const handlePopoverLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height, width },
      },
    }: LayoutChangeEvent) => {
      setLayout((state) => {
        if (state.height === height && state.width === width) {
          return state;
        }

        return {
          height,
          width,
        };
      });
    },
    []
  );
  const fontStyles = {
    workSans: {
      600: { fontFamily: "WorkSans_600SemiBold" },
      400: { fontFamily: "WorkSans_400Regular" },
    },
    openSans: {
      600: { fontFamily: "OpenSans_600SemiBold" },
      400: { fontFamily: "OpenSans_400Regular" },
    },
  };

  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.buttonContainer}>
      <View style={[styles.backdropContainer, { overflow: "hidden" }]}>
        <View
          onLayout={handlePopoverLayout}
          style={[
            popoverContainerStyle,
            {
              borderRadius: 15,
              shadowColor: "#000000",
              shadowOpacity: 0.1,
              shadowRadius: 30,
              shadowOffset: { height: 10, width: 0 },
            },
          ]}
        >
          <ThemedView
            style={{
              borderBottomWidth: 1,
              borderColor: "#262C451A",
              width: "100%",
              paddingHorizontal: 25,
              paddingVertical: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
            }}
          >
            <Text
              style={[
                {
                  textAlign: "center",
                  color: "#262C45",
                  opacity: 0.4,
                  fontSize: 12,
                },
                fontStyles.openSans[600],
              ]}
            >
              Quick Actions
            </Text>
          </ThemedView>
          <ThemedView
            style={{ borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}
          >
            <Flex
              direction="row"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            >
              <ThemedText
                style={[
                  fontStyles.openSans[600],
                  { color: "#262C45", fontSize: 13 },
                ]}
              >
                View Exercise Info
              </ThemedText>
              <Pressable
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: "50%",

                  backgroundColor: "white",
                }}
              >
                <Feather name="info" size={23} color="black" />
              </Pressable>
            </Flex>
            <Flex
              direction="row"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            >
              <ThemedText
                style={[
                  fontStyles.openSans[600],
                  { color: "#262C45", fontSize: 13 },
                ]}
              >
                Show Exercise History
              </ThemedText>
              <Pressable
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              >
                <MaterialIcons name="history" size={26} color="black" />
              </Pressable>
            </Flex>
          </ThemedView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "red",
    borderRadius: 30,
  },
  popoverContainer: {
    position: "absolute",
    alignSelf: "center",
    padding: 0,
    backgroundColor: "white",
    width: 240,
  },
});

export default SimplePopover;
