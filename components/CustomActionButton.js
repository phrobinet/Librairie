import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import color from "../assets/colors";

function getPosition(position) {
  switch (position) {
    case "left":
      return { position: "absolute", left: 20, bottom: 20 };
    default:
      return { position: "absolute", right: 20, bottom: 20 };
  }
}

const CustomActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPosition(position) : [];
  return (
    <TouchableOpacity style={floatingActionButton} onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

CustomActionButton.proptypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  sytle: PropTypes.object
};

CustomActionButton.defaultProps = {
  style: {}
};
export default CustomActionButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: color.bgError,
    justifyContent: "center",
    alignItems: "center"
  }
});
