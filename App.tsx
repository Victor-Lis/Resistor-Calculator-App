import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/Router/Index/index";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
}
