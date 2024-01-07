import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

interface DisplayProps {
  displayValue: string;
  clearDisplay: boolean;
}

export default (props: DisplayProps) => {
  const [displayValue, setDisplayValue] = useState(props.displayValue);

  useEffect(() => {
    setDisplayValue(props.displayValue);
  }, [props.displayValue]);

  return (
    <View style={style.display}>
      <Text style={style.displayValue} numberOfLines={1}>
        {displayValue}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  displayValue: {
    fontSize: 60,
    color: "#fff",
  },
});
