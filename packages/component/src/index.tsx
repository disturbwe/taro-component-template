import { View, Text } from "@tarojs/components";
import React from "react";

export default (props: { text: string }) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};
