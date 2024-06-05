import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, ImageBackground, ScrollView, Text } from "react-native";
const WorkoutScreen = () => {
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
  };
  const candice =
    "https://s3-alpha-sig.figma.com/img/f8e5/6c72/2db22f426b0255cdf7546ad15f982ca4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8Rw~tLb2V1e38BFCpSgo-3pikxSwpu0L6bWPyeeBH9L7geZNEL6LGJ8acB-LT2gl-T1THMHQNeFD7atmMeYz-CzQxDiXOdIxIQvxLMsBIxE044wdj~Jw5moUa9CNP0WMA9xaf0iFPDenJ55nnYpM~uWmCHcWRnyrQGfpueop44S9oKBgGXSOdLDnqZVkP--ubcr9aVHqnFl3WihnwdwzGxvdvLBKxhGxBiar8VnwPX7eGYFiBqBlRhqpf3-RFAAAYQtn4NlPDRMtL2WXTLXnC6HKdVXXvu4Q-N9gzb8j3q0nGJUDFQCTmjSM9M8KI9pEW6HSaVpOL2eGVbkjmRTAQ__";
  return (
    <ThemedView style={{ paddingTop: 10 }}>
      <Flex direction="column" style={{ padding: 10, marginHorizontal: 25 }}>
        <ThemedText style={{ fontSize: 28, padding: 3 }}>Full Body</ThemedText>
        <Flex direction="row">
          <Image
            source={{ uri: candice }}
            height={30}
            width={30}
            style={{ borderRadius: "50%" }}
          ></Image>
          <ThemedText>with Candice</ThemedText>
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
        <ThemedText style={{ flexShrink: 1, color: "white" }}>
          Your 7-day trial is running out. Enjoy and make the most of it
        </ThemedText>
        <ThemedText style={{ textAlign: "center", color: "white" }}>
          <Text
            style={{
              color: "yellow",
              fontSize: 25,
              fontWeight: 800,
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
          <ThemedText style={{ color: "white" }}>65 Min</ThemedText>
        </ThemedView>
        <Flex
          direction="row"
          style={{
            position: "absolute",
            bottom: 5,
            width: "100%",
            backgroundColor: "rgba(0,0,0, .5)",
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
          <ThemedText style={{ color: "white" }}>
            members have already {`\n`}completed this workout!
          </ThemedText>
        </Flex>
        <ScrollView></ScrollView>
      </ImageBackground>
    </ThemedView>
  );
};

export default WorkoutScreen;
