import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

const PreHomeScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log('User Health Data:', data);
    // Save data to backend/database
    navigation.navigate('Home'); // Navigate to Home screen after submission
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.sectionTitle}>Hormonal Health</Text>
            <Controller
              control={control}
              name="hormonalImbalance"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>Do you experience hormonal imbalances?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                  </Picker>
                </View>
              )}
            />
            <Controller
              control={control}
              name="hormonalMedication"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>Are you on any hormonal medication?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                  </Picker>
                </View>
              )}
            />
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.sectionTitle}>Menstrual Cycle</Text>
            <Controller
              control={control}
              name="cycleLength"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>What is the average length of your menstrual cycle?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="21-25 days" value="21-25" />
                    <Picker.Item label="26-30 days" value="26-30" />
                    <Picker.Item label="31-35 days" value="31-35" />
                    <Picker.Item label="35+ days" value="35+" />
                  </Picker>
                </View>
              )}
            />
            <Controller
              control={control}
              name="irregularPeriods"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>Do you experience irregular periods?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                  </Picker>
                </View>
              )}
            />
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.sectionTitle}>Fitness Goals</Text>
            <Controller
              control={control}
              name="fitnessGoals"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>What are your primary fitness goals?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Weight Loss" value="Weight Loss" />
                    <Picker.Item label="Muscle Gain" value="Muscle Gain" />
                    <Picker.Item label="General Fitness" value="General Fitness" />
                  </Picker>
                </View>
              )}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health Questionnaire</Text>
      <Text style={styles.subtitle}>Step {step} of 3</Text>

      {renderStep()}

      <View style={styles.buttonContainer}>
        {step > 1 && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStep(step - 1)}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {step < 3 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStep(step + 1)}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#9575CD',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PreHomeScreen;