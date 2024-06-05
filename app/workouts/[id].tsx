import Flex from "@/components/Flex";
const WorkoutScreen = () => {
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
    </ThemedView>
  );
};

export default WorkoutScreen;
