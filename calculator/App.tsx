import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import { useState } from 'react';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null as string | null,
  values: [0, 0],
  current: 0,
}

export default function App() {
 
  const [state, setState] = useState(initialState)

  const addDigit = (n: string) => {
    setState((prevState) => {

  
      const clearDisplay = prevState.displayValue === '0' || prevState.clearDisplay;

      if (n === '.' && !clearDisplay && prevState.displayValue.includes('.')) {
        return prevState;
      }
      
      const currentvalue = clearDisplay ? '' : prevState.displayValue;
      const displayValue = currentvalue + n;
  
      const values = [...prevState.values];
      values[prevState.current] = parseFloat(displayValue);
  
      return { ...prevState, displayValue, values, clearDisplay: false };
    });
  };
  
  const clearMemory = () => {
    setState ({...initialState})
  }

  const setOperation = (operation: string) => {
  
    setState((prevState) => {
  
      if (prevState.current === 0) {
        return { ...prevState, operation, current: 1, clearDisplay: true };
      } else {
        const equals = operation === '=';
        const values = [...prevState.values];
        try {
          if (prevState.operation) {
            switch (prevState.operation) {
              case '+':
                values[0] += values[1];
                break;
              case '-':
                values[0] -= values[1];
                break;
              case '*':
                values[0] *= values[1];
                break;
              case '/':
                values[0] /= values[1];
                break;
              default:
                break;
            }
          }
          values[1] = 0;
        } catch (e) {
          console.error('Error in setOperation:', e);
        }
  
        const displayValue = equals ? values[0].toString() : prevState.displayValue;
  
        const newState = {
          displayValue: values[0].toString(),
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values,
        };
   
        return newState;
      }
    });
  };
  
  
  return (
    <View style={styles.container}>
      <Display displayValue={state.displayValue} clearDisplay={state.clearDisplay} />
      <View style={styles.buttons}>
        <Button label="AC" onClick={clearMemory} operation={false} double={false} triple={true} />
        <Button label="/" operation onClick={() => setOperation('/')} triple={false} double={false} />
        <Button label="7" onClick={() => addDigit('7')} triple={false} operation={false} double={false} />
        <Button label="8" onClick={() => addDigit('8')} triple={false} operation={false} double={false} />
        <Button label="9" onClick={() => addDigit('9')} triple={false} operation={false} double={false} />
        <Button label="*" operation onClick={() => setOperation('*')} triple={false} double={false} />
        <Button label="4" onClick={() => addDigit('4')} triple={false} operation={false} double={false} />
        <Button label="5" onClick={() => addDigit('5')} triple={false} operation={false} double={false} />
        <Button label="6" onClick={() => addDigit('6')} triple={false} operation={false} double={false} />
        <Button label="-" operation onClick={() => setOperation('-')} triple={false} double={false} />
        <Button label="1" onClick={() => addDigit('1')} triple={false} operation={false} double={false} />
        <Button label="2" onClick={() => addDigit('2')} triple={false} operation={false} double={false} />
        <Button label="3" onClick={() => addDigit('3')} triple={false} operation={false} double={false} />
        <Button label="+" operation onClick={() => setOperation('+')} triple={false} double={false} />
        <Button label="0" onClick={() => addDigit('0')} triple={false} operation={false} double={true} />
        <Button label="." onClick={() => addDigit('.')} triple={false} operation={false} double={false} />
        <Button label="=" operation onClick={() => setOperation('=')} triple={false} double={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
