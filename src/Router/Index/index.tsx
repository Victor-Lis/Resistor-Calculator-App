import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { RootRoutes } from "./indexRoutesType";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import NumToColor from "../../Pages/NumToColor";
import ColorToNum from "../../Pages/ColorToNum";

import { Text } from "react-native";

const Bottom = createBottomTabNavigator<RootRoutes>();

export function Router() {
  return (
    <>
      <StatusBar hidden={true} />
      <Bottom.Navigator>
        <Bottom.Screen
          name="ColorToNum"
          component={ColorToNum}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#202020",
            },
            tabBarIcon: ({ focused, size }) => (
              <MaterialIcons
                name="palette"
                color={focused ? "#00ff00" : "#7d7d7d"}
                size={size}
              />
            ),
            tabBarLabel: ({ focused, color, position, children }) => (
              <Text style={{ color: focused ? "#00ff00" : "#7d7d7d" }}>
                {children}
              </Text>
            ),
          }}
        />
        <Bottom.Screen
          name="NumToColor"
          component={NumToColor}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#202020",
              height: 50,
              alignItems: "center",
            },
            tabBarIcon: ({ focused, size }) => (
              <FontAwesome
                name="calculator"
                color={focused ? "#00ff00" : "#7d7d7d"}
                size={size - 5}
              />
            ),
            tabBarLabel: ({ focused, color, position, children }) => (
              <Text style={{ color: focused ? "#00ff00" : "#7d7d7d" }}>
                {children}
              </Text>
            ),
          }}
        />
      </Bottom.Navigator>
    </>
  );
}
