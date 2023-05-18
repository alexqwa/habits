import { View, Text, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import { useNavigation } from "@react-navigation/native"

import Logo from "../assets/logo.svg"

export function Header() {
  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        onPress={() => navigate("New")}
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-violet-500 rounded-xl items-center"
      >
        <Feather name="plus" size={20} color={colors.violet[500]} />
        <Text className="text-white ml-3 font-inter600 text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  )
}
