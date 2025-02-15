import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

const VitalViewScreen = ({ userData }) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Example user data (replace with actual data from your backend)
  const user = {
    name: 'Priya',
    age: 28,
    healthSummary: {
      bmi: 22.5,
      bmiCategory: 'Healthy',
      hydrationLevel: 'Good',
      sleepQuality: 'Fair',
      sleepHours: '6 hours',
      stressLevel: 'High',
      dietType: 'Vegetarian',
      fruitVeggieIntake: '1-2 times a day',
      menstrualCycle: 'Regular',
      periodSymptoms: ['Cramps', 'Mood Swings'],
      diagnosedConditions: ['None'],
      mentalHealth: 'Sometimes anxious',
      physicalActivity: '3-4 times a week',
    },
    recommendations: [
      {
        id: 1,
        category: 'Nutrition',
        title: 'Increase Water Intake',
        description: 'Drink at least 2 liters of water daily to stay hydrated.',
        image: require('../assets/water.png'),
      },
      {
        id: 2,
        category: 'Fitness',
        title: 'Daily Yoga Routine',
        description: 'Practice yoga for 20 minutes daily to reduce stress.',
        image: require('../assets/yoga.png'),
      },
      {
        id: 3,
        category: 'Mental Health',
        title: 'Meditation Practice',
        description: 'Meditate for 10 minutes daily to improve focus and calmness.',
        image: require('../assets/meditation.png'),
      },
      {
        id: 4,
        category: 'Sleep',
        title: 'Improve Sleep Quality',
        description: 'Aim for 7-8 hours of sleep and maintain a consistent sleep schedule.',
        image: require('../assets/sleep.png'),
      },
      {
        id: 5,
        category: 'Diet',
        title: 'Increase Fruit & Vegetable Intake',
        description: 'Include fruits and vegetables in every meal for better nutrition.',
        image: require('../assets/fruits.png'),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Health Summary Section */}
      <ScrollView style={styles.summarySection}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, {user.name}!</Text>
          <Text style={styles.subHeaderText}>Your Personalized Health Summary</Text>
        
        </View>

        <View style={styles.summaryContainer}>
  <Text style={styles.summaryTitle}>Health Overview</Text>
  
  {/* Table Header */}
  <View style={styles.tableHeader}>
    <Text style={styles.tableHeaderText}>Parameter</Text>
    <Text style={styles.tableHeaderText}>Value</Text>
  </View>

  {/* Table Rows */}
  {[
    { label: "BMI", value: `${user.healthSummary.bmi} (${user.healthSummary.bmiCategory})` },
    { label: "Hydration Level", value: user.healthSummary.hydrationLevel },
    { label: "Sleep Quality", value: `${user.healthSummary.sleepQuality} (${user.healthSummary.sleepHours})` },
    { label: "Stress Level", value: user.healthSummary.stressLevel },
    { label: "Diet Type", value: user.healthSummary.dietType },
    { label: "Fruit & Veggie Intake", value: user.healthSummary.fruitVeggieIntake },
    { label: "Menstrual Cycle", value: user.healthSummary.menstrualCycle },
    { label: "Period Symptoms", value: user.healthSummary.periodSymptoms.join(", ") },
    { label: "Diagnosed Conditions", value: user.healthSummary.diagnosedConditions.join(", ") },
    { label: "Mental Health", value: user.healthSummary.mentalHealth },
    { label: "Physical Activity", value: user.healthSummary.physicalActivity }
  ].map((item, index) => (
    <View 
      key={index} 
      style={[
        styles.tableRow, 
        index % 2 === 0 ? styles.rowEven : styles.rowOdd // Alternating row colors
      ]}
    >
      <Text style={styles.tableCell}>{item.label}</Text>
      <Text style={styles.tableCell}>{item.value}</Text>
    </View>
  ))}
</View>


        {/* Button to View Recommendations */}
        <TouchableOpacity
          style={styles.recommendationButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.recommendationButtonText}>View Your Personalized Health Recommendations Here</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for Recommendations */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView
          style={styles.blurView}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Your Personalized Recommendations</Text>
            <ScrollView>
              {user.recommendations.map((item) => (
                <TouchableOpacity key={item.id} style={styles.recommendationCard}>
                  <Image source={item.image} style={styles.recommendationImage} />
                  <View style={styles.recommendationTextContainer}>
                    <Text style={styles.recommendationCategory}>{item.category}</Text>
                    <Text style={styles.recommendationTitle}>{item.title}</Text>
                    <Text style={styles.recommendationDescription}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5C9',
  },
  header: {
    marginTop: 30,
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerImage: {
    width: 200,  
    height: 200, 
    resizeMode: 'contain', 
    alignSelf: 'center', 
  },
  subHeaderText: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
  summarySection: {
    flex: 1,
  },
  summaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#9575CD', // Light purple header
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rowEven: {
    backgroundColor: '#F3E5F5', // Light purple alternate row color
  },
  rowOdd: {
    backgroundColor: '#EDE7F6', // Slightly different shade
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  
  recommendationButton: {
    backgroundColor: '#9575CD',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  recommendationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '90%',
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  recommendationCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  recommendationImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  recommendationTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  recommendationCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#666',
  },
  closeButton: {
    backgroundColor: '#9575CD',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VitalViewScreen;