import { useState } from "react"
import colors from "tailwindcss/colors"
import { Feather } from "@expo/vector-icons"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native"

import { BackButton } from "../components/BackButton"
import { Checkbox } from "../components/Checkbox"

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([])

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      )
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className="mt-6 text-white font-inter800 text-3xl">
          Criar hábito
        </Text>
        <Text className="mt-6 text-white font-inter600 text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          placeholder="Ex.: Exercíocios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-xl mt-3 bg-zinc-800 border-2 border-transparent text-white focus:border-2 focus:border-green-500"
        />
        <Text className="font-inter600 mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-500 rounded-xl mt-6"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="text-white font-inter600 text-base ml-3">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
