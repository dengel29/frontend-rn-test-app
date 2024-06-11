import Flex from "./Flex";
import { Text, Image, ImageBackground } from "react-native";
import { ThemedText } from "./ThemedText";
import { Workout } from "@/app/types";
import { ThemedView } from "./ThemedView";

const styles = {
  image: {
    height: 250,
    position: "relative",
    marginTop: 30,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 75,
  },
  workSans: {
    600: { fontFamily: "WorkSans_600SemiBold" },
    400: { fontFamily: "WorkSans_400Regular" },
  },
  openSans: {
    600: { fontFamily: "OpenSans_600SemiBold" },
    400: { fontFamily: "OpenSans_400Regular" },
  },
};
export const WorkoutTopSection = ({ workout }: { workout: Workout }) => {
  const candice =
    "https://s3-alpha-sig.figma.com/img/f8e5/6c72/2db22f426b0255cdf7546ad15f982ca4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8Rw~tLb2V1e38BFCpSgo-3pikxSwpu0L6bWPyeeBH9L7geZNEL6LGJ8acB-LT2gl-T1THMHQNeFD7atmMeYz-CzQxDiXOdIxIQvxLMsBIxE044wdj~Jw5moUa9CNP0WMA9xaf0iFPDenJ55nnYpM~uWmCHcWRnyrQGfpueop44S9oKBgGXSOdLDnqZVkP--ubcr9aVHqnFl3WihnwdwzGxvdvLBKxhGxBiar8VnwPX7eGYFiBqBlRhqpf3-RFAAAYQtn4NlPDRMtL2WXTLXnC6HKdVXXvu4Q-N9gzb8j3q0nGJUDFQCTmjSM9M8KI9pEW6HSaVpOL2eGVbkjmRTAQ__";
  return (
    <>
      <Flex direction="column" style={{ padding: 10, marginHorizontal: 25 }}>
        <ThemedText
          style={[
            { fontSize: 28, padding: 3, lineHeight: 40 },
            styles.workSans[600],
          ]}
        >
          Full Body
        </ThemedText>
        <Flex direction="row">
          <Image
            source={{ uri: candice }}
            height={30}
            width={30}
            style={{ borderRadius: "50%" }}
          ></Image>
          <ThemedText style={[styles.openSans[400]]}>
            with {workout.trainerName}
          </ThemedText>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        style={{
          backgroundColor: "purple",
          marginHorizontal: 20,
          paddingHorizontal: 10,
          paddingVertical: 15,
          borderRadius: 10,
        }}
      >
        <ThemedText
          style={[{ flexShrink: 1, color: "white" }, styles.workSans[600]]}
        >
          Your{" "}
          <Text
            style={{
              color: "yellow",
            }}
          >
            7-day trial
          </Text>{" "}
          is running out. Enjoy and make the most of it
        </ThemedText>
        <ThemedText style={{ textAlign: "center", color: "white" }}>
          <Text
            style={{
              color: "yellow",
              fontSize: 25,
            }}
          >
            6 {`\n`}
          </Text>
          days left
        </ThemedText>
      </Flex>
      <ImageBackground
        source={{ uri: candice }}
        resizeMode="cover"
        style={styles.image}
      >
        <ThemedView
          style={{
            position: "absolute",
            backgroundColor: "#262C45B2",
            top: 20,
            left: 20,
            paddingHorizontal: 14,
            paddingVertical: 11,
            borderRadius: 30,
          }}
        >
          <ThemedText style={[{ color: "white" }, styles.openSans[600]]}>
            {workout.duration} Min
          </ThemedText>
        </ThemedView>
        <Flex
          direction="row"
          style={{
            position: "absolute",
            bottom: 1,
            paddingBottom: 10,
            width: "100%",
            backgroundColor: "rgba(0,0,0, .2)",
            justifyContent: "space-around",
          }}
        >
          <Flex direction="row" style={{ alignItems: "center", width: "20%" }}>
            <ThemedView
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: "50%",
              }}
            ></ThemedView>
            <ThemedView
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: "50%",
                marginLeft: -10,
              }}
            ></ThemedView>
            <ThemedView
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: "50%",
                marginLeft: -10,
              }}
            ></ThemedView>
            <ThemedView
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: "50%",
                marginLeft: -10,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  marginTop: 10,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                +3.7k
              </Text>
            </ThemedView>
          </Flex>
          <ThemedText
            style={[
              { color: "white", lineHeight: 16.34 },
              styles.openSans[600],
            ]}
          >
            members have already {`\n`}completed this workout!
          </ThemedText>
        </Flex>
      </ImageBackground>
    </>
  );
};
