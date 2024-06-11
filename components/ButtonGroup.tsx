import Flex from "./Flex";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const ButtonGroup = ({
  isWarmup,
  shuffle,
  handlePressQuickActions,
}: {
  isWarmup: boolean;
  shuffle: () => void;
  handlePressQuickActions: (e: any) => void;
}) => {
  return (
    <Flex
      direction="row"
      style={{
        justifyContent: "space-between",
        width: "19%",
      }}
    >
      {!isWarmup && (
        <TouchableOpacity style={[styles.buttonStyle]} onPress={shuffle}>
          <Entypo
            name="shuffle"
            size={18}
            color="white"
            style={{
              marginHorizontal: "auto",
              marginVertical: "auto",
            }}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            marginLeft: "auto",
          },
        ]}
        onPress={handlePressQuickActions}
      >
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="white"
          style={{
            marginHorizontal: "auto",
            marginVertical: "auto",
          }}
        />
      </TouchableOpacity>
    </Flex>
  );
};

const styles = {
  buttonStyle: {
    height: 26,
    width: 26,
    borderRadius: "50%",
    borderWidth: 2,
    backgroundColor: "#262C45",
  },
};
