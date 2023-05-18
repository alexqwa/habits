import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native"
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated"

interface CheckboxProps extends TouchableOpacityProps {
  title: string
  checked?: boolean
}

export function Checkbox({ checked = false, title, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
    >
      {checked ? (
        <Animated.View
          entering={ZoomIn}
          exiting={ZoomOut}
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="w-8 h-8 bg-zinc-900 rounded-lg" />
      )}
      <Text className="text-white ml-3">{title}</Text>
    </TouchableOpacity>
  )
}
