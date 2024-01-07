import { Button, StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";
import React from 'react';

interface ButtonProps {
  label: string;
  triple: boolean;
  operation: boolean;
  double: boolean;
  onClick: () => void;
}

export default (props: ButtonProps) => {
    let buttonStyles: any = { ...styles.button };

    if (props.double) {
        buttonStyles = { ...buttonStyles, ...styles.buttonDouble };
    }

    if (props.triple) {
        buttonStyles = { ...buttonStyles, ...styles.buttonTriple };
    }

    if (props.operation) {
        buttonStyles = { ...buttonStyles, ...styles.operationButton };
    }
  
    const textStyles: any = [styles.buttonText];
    if (props.operation) {
        textStyles.push(styles.operationButtonText);
    }
  
    return (
      <TouchableHighlight onPress={props.onClick} style={buttonStyles}>
        <Text style={textStyles}>{props.label}</Text>
      </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888'
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center'
  },
  operationButton: {
    backgroundColor: '#fa8231'
  },
  operationButtonText: {
    color: '#fff'
  },
  buttonDouble: {
    width: Dimensions.get('window').width / 2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3
  },
});
