import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input} >
        <Picker
          // selectedValue={this.state.language}
          // onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        >
          <Picker.Item label="java" value="java" />
          <Picker.Item label="javaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
    label : {
        fontSize : 16,
        fontFamily : 'Poppins-Regular',
        color : '#020202'
    },
    input : {
        borderWidth : 1,
        borderColor : '#020202',
        borderRadius : 8,
        paddingHorizontal : 2,
        paddingVertical : 0
    }
});
