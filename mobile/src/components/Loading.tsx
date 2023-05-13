import { View, ActivityIndicator } from "react-native"
import colors from "tailwindcss/colors"

export function Loading() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <ActivityIndicator color={colors.violet[500]} />
    </View>
  )
}
