import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type IFavorite = {
  status: "favorited" | "not-favorited";
  onPress?: () => void | undefined;
};

export const Favorite = ({ status, onPress }: IFavorite) => (
  <TouchableOpacity
    testID={status === "favorited" ? "favorited-icon" : "not-favorited-icon"}
    onPress={onPress}
  >
    {status === "favorited" ? (
      <MaterialCommunityIcons name="pokeball" size={24} color="red" />
    ) : (
      <MaterialCommunityIcons name="pokeball" size={24} color="black" />
    )}
  </TouchableOpacity>
);
