import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

const PreHomeScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log('FemBio: User Health Data:', data);
    // Save data to backend/database
    navigation.navigate('Home'); // Navigate to Home screen after submission
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.sectionTitle}>Basic Information</Text>
            
            <Controller
              control={control}
              name="height"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>1. What is your height? (cm/inches)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter height"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                  />
                </View>
              )}
            />
            
            <Controller
              control={control}
              name="weight"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>2. What is your weight? (kg/lbs)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter weight"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                  />
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
              name="hasMenstrualCycle"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>1. Do you currently have a menstrual cycle?</Text>
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
              name="lastPeriodDate"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>2. When was the start date of your last period?</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter date (YYYY-MM-DD)"
                    value={value}
                    onChangeText={onChange}
                  />
                </View>
              )}
            />
           
            <Controller
              control={control}
              name="periodDuration"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>3. How many days does your period usually last?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    {Array.from({ length: 10 }, (_, i) => (
                      <Picker.Item key={i + 1} label={`${i + 1} days`} value={i + 1} />
                    ))}
                  </Picker>
                </View>
              )}
            />
            
            <Controller
              control={control}
              name="periodSymptoms"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>4. What symptoms do you experience during your period?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Cramps" value="Cramps" />
                    <Picker.Item label="Heavy Bleeding" value="Heavy Bleeding" />
                    <Picker.Item label="Bloating" value="Bloating" />
                    <Picker.Item label="Mood Swings" value="Mood Swings" />
                    <Picker.Item label="Breast Tenderness" value="Breast Tenderness" />
                    <Picker.Item label="Nausea" value="Nausea" />
                  </Picker>
                </View>
              )}
            />
            
            <Controller
              control={control}
              name="diagnosedConditions"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>5. Have you ever been diagnosed with:</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="PCOS" value="PCOS" />
                    <Picker.Item label="Endometriosis" value="Endometriosis" />
                    <Picker.Item label="Thyroid Issues" value="Thyroid Issues" />
                    <Picker.Item label="Hormonal Imbalance" value="Hormonal Imbalance" />
                    <Picker.Item label="None" value="None" />
                  </Picker>
                </View>
              )}
            />
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.sectionTitle}>Pregnancy</Text>
           
            <Controller
              control={control}
              name="tryingToConceive"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>1. Are you actively trying to conceive?</Text>
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
              name="weeksPregnant"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>2. How many weeks along are you?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    {Array.from({ length: 40 }, (_, i) => (
                      <Picker.Item key={i + 1} label={`${i + 1} weeks`} value={i + 1} />
                    ))}
                  </Picker>
                </View>
              )}
            />
           
            <Controller
              control={control}
              name="pregnancyComplications"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>3. Have you had any complications in previous pregnancies?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Miscarriage" value="Miscarriage" />
                    <Picker.Item label="Gestational Diabetes" value="Gestational Diabetes" />
                    <Picker.Item label="Preeclampsia" value="Preeclampsia" />
                    <Picker.Item label="None" value="None" />
                  </Picker>
                </View>
              )}
            />
          </>
        );
      case 4:
        return (
          <>
            <Text style={styles.sectionTitle}>Mental Health</Text>
           
            <Controller
              control={control}
              name="depressionAnxiety"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>1. Have you ever been diagnosed with depression or anxiety?</Text>
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
              name="moodSwings"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>2. Do you experience mood swings frequently?</Text>
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
              name="stressLevel"
              render={({ field: { onChange, value } }) => (
                <View style={styles.question}>
                  <Text>3. How often do you feel overwhelmed or stressed?</Text>
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Rarely" value="Rarely" />
                    <Picker.Item label="Sometimes" value="Sometimes" />
                    <Picker.Item label="Often" value="Often" />
                    <Picker.Item label="Always" value="Always" />
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
      <Text style={styles.title}>FemBio: User Health Data Input</Text>
     
      <View style={styles.progressBarContainer}>
  <View style={[styles.progressBar, { width: `${(step / 4) * 100}%` }]} />
</View>

      {renderStep()}

      <View style={styles.buttonContainer}>
        {step === 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStep(step + 1)}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <>
            {step > 1 && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setStep(step - 1)}
              >
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}
            {step < 4 ? (
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
          </>
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
    marginBottom: 30,
    marginTop: 40,
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#E0E0E0', // Background color of the progress bar
    borderRadius: 5,
    marginVertical: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#9575CD', // Color of the filled part of the progress bar
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  question: {
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    maarginTop: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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