import clsx from "clsx"
import dayjs from "dayjs"
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Dimensions,
} from "react-native"
import { generateProgressPercentage } from "../utils/generate-progess-percentage"

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL + 5)

interface HabitDayProps extends TouchableOpacityProps {
  date: Date
  amount?: number
  completed?: number
}

export function HabitDay({
  amount = 0,
  completed = 0,
  date,
  ...rest
}: HabitDayProps) {
  const progress =
    amount > 0 ? generateProgressPercentage(amount, completed) : 0
  const today = dayjs().startOf("day").toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className={clsx("rounded-xl border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: progress === 0,
        ["bg-violet-900 border-violet-800"]: progress > 0 && progress < 20,
        ["bg-violet-800 border-violet-700"]: progress >= 20 && progress < 40,
        ["bg-violet-700 border-violet-600"]: progress >= 40 && progress < 60,
        ["bg-violet-600 border-violet-500"]: progress >= 60 && progress < 80,
        ["bg-violet-500 border-violet-400"]: progress >= 80,
        ["border-white"]: isCurrentDay,
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
    />
  )
}
