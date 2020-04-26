import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Sample = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Sample Text New Change</Text>
    </View>
  );
}

export default Sample;
