import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native"

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito.{" "}
      <Text
        onPress={() => navigate("New")}
        className="text-violet-500 text-base underline active:text-violet-600"
      >
        Cadastre um agora mesmo.
      </Text>
    </Text>
  )
}
