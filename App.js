import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { Header } from "./src/components/Header";
import { ChooseDate } from "./src/components/ChooseDate";
import { Movies } from "./src/components/Movies";

const Stack = createStackNavigator();

export default function App() {
  const [date, setDate] = useState(new Date());
  const navigationRef = useNavigationContainerRef();
  const goBack = () => navigationRef.current;
  const config = {
    animation: "spring",
    config: {
      stiffness: 100000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Header goBack={goBack} />
      <Stack.Navigator>
        <Stack.Screen
          name="ChooseDate"
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        >
          {() => <ChooseDate date={date} setDate={setDate} />}
        </Stack.Screen>
        <Stack.Screen
          name="Movies"
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        >
          {() => <Movies date={date} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
