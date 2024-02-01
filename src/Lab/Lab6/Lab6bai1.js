import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';


const Lab6bai1 = (props) => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [name, setName] = useState('');
  const [masv, setMasv] = useState('');
  const [lop, setLop] = useState('');
  const { navigation } = props;

  const onBranchChange = value => {
    setSelectedBranch(value);
  };
  const onSubmit = () => {
      navigation.navigate('Detail', { name, masv, lop, selectedBranch });
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Chào bạn, đây là màng hình chính</Text>
        <TextInput
          placeholder="Lê Thị Cẩm Giang"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.buttoncontai}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.textbutton}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttoncontai}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lab6bai2')}>
          <Text style={styles.textbutton}>Lab6bai2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  pickerLabel: {
    borderWidth: 1,
    borderColor: '#000',
  },
  inputlabel: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  buttoncontai: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 10,
    width: 320,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFF00',
  },
  textbutton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  thongtinsv: {
    backgroundColor: '#c0c0c0',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#026466',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 7,
  },
});

export default Lab6bai1;