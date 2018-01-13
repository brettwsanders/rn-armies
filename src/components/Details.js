import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class DetailsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>Details Screen</Text>
            </View>
        );
    }
}


