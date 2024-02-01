import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const customUuidGenerator = () => {
  const randomThreeDigitNumber = Math.floor(100 + Math.random() * 900);
  return randomThreeDigitNumber.toString();
};

const Detail = ({ route }) => {
  const { name } = route.params;
  const navigation = useNavigation();

  const userId = customUuidGenerator();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold' }}>
          Chào bạn:
        </Text>
        <Text style={{ color: 'blue', fontSize: 16, marginTop: 5 }}> {name}</Text>

      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Id của bạn là,</Text>
        <Text style={styles.value}>{userId}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Trở lại bằng goBack" onPress={navigation.goBack} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Trở lại bằng reset"
          onPress={() => navigation.reset({ routes: [{ name: 'Lab6bai1' }] })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Trở lại bằng pop" onPress={() => navigation.pop()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Trở lại bằng popToTop"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    padding: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  value: {
    color: 'blue',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Detail;