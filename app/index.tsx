import Chair from "@/components/Chair";
import Char from "@/components/Char";
import ShoeWrapper from "@/components/ShoeWrapper";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};

const index = (props: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.text}>useGLTF (From Drei)</Text>
      <ShoeWrapper />
      <Text style={styles.text}>useFBX (From Drei)</Text>
      <Char />
      <Text style={styles.text}>GLTFLoader (three)</Text>
      <Chair />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
