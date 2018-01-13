import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "../components/Home.js";
import DetailsScreen from "../components/Details.js";

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
});

export default RootNavigator;
