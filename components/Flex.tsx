import { StyleProp, View, ViewStyle } from "react-native";

const Flex = ({
  children,
  direction,
  style,
}: {
  children: React.ReactNode;
  direction: "column" | "row";
  style?: StyleProp<ViewStyle>;
}) => {
  const styles = {
    ...style,
    display: "flex",
    flexDirection: direction,
  } as StyleProp<ViewStyle>;
  return <View style={{ ...styles }}>{children}</View>;
};

export default Flex;
