import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Screen, Navigator } = createNativeStackNavigator()

import { Home } from "../pages/Home"
import { Habit } from "../pages/Habit"
import { New } from "../pages/New"

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Habit" component={Habit} />
      <Screen name="New" component={New} />
    </Navigator>
  )
}
