import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const logo = require('../assets/EmpowerHub.png'); // Adjust the path to your logo image

const healthSections = [
  {
    section: 'Blossom Cycle Care',
    color: '#D4B200',
    textColor: '#BFA0D9',
    tips: [
      { title: 'Hygiene First', content: 'Change pads or tampons every 4-6 hours. Use breathable cotton underwear.' },
      { title: 'Stay Hydrated', content: 'Drink plenty of water to stay hydrated and support overall health.' },
    ],
  },
  {
    section: 'Motherhood Wellness',
    color: '#5A3A8E',
    textColor: '#FFF3A4',
    tips: [
      { title: 'Nutritional Boost', content: 'Eat a balanced diet rich in folic acid, iron, and calcium.' },
      { title: 'Gentle Movements', content: 'Engage in moderate physical activity to maintain a healthy pregnancy.' },
    ],
  },
  {
    section: 'Mind & Mood Harmony',
    color: '#D4B200',
    textColor: '#BFA0D9',
    tips: [
      { title: 'Stress-Free Living', content: 'Practice mindfulness and relaxation techniques to reduce stress.' },
      { title: 'Restorative Sleep', content: 'Ensure 7-9 hours of sleep to maintain mental well-being.' },
    ],
  },
  {
    section: 'Golden Grace (Menopause Care)',
    color: '#5A3A8E',
    textColor: '#FFF3A4',
    tips: [
      { title: 'Balanced Diet', content: 'Include calcium and vitamin D-rich foods to support bone health.' },
      { title: 'Stay Active', content: 'Regular exercise helps manage symptoms and maintain mobility.' },
    ],
  },
  {
    section: 'Vital Curves (Breast Health)',
    color: '#D4B200',
    textColor: '#BFA0D9',
    tips: [
      { title: 'Self-Check Routine', content: 'Perform regular self-exams to detect any unusual changes early.' },
      { title: 'Healthy Lifestyle', content: 'Maintain a balanced diet and exercise to support breast health.' },
    ],
  },
  {
    section: 'Hormonal Balance (PCOS Care)',
    color: '#5A3A8E',
    textColor: '#FFF3A4',
    tips: [
      { title: 'Healthy Eating', content: 'Opt for whole foods and reduce processed sugar intake to balance hormones.' },
      { title: 'Stress Management', content: 'Practice yoga and meditation to regulate hormonal fluctuations.' },
    ],
  },
];

const HealthTipsScreen = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Empowerment Hub</Text>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.quote}>
        "She who learns, lifts the world."
      </Text>

      {!selectedSection ? (
        <View style={styles.sectionContainer}>
          {healthSections.map((section, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sectionButton, { backgroundColor: section.color }]}
              onPress={() => setSelectedSection(section)}
            >
              <Text style={styles.sectionText}>{section.section}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedSection(null)}>
            <Text style={styles.backButtonText}>⬅ Back</Text>
          </TouchableOpacity>
          {selectedSection.tips.map((tip, index) => (
            <Card key={index} style={[styles.card, { backgroundColor: selectedSection.textColor }]}> 
              <Card.Content>
                <Title style={styles.title}>{tip.title}</Title>
                <Paragraph>{tip.content}</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 60,
    color: '#5A3A8E',
  },
  logo: {
    width: 190,
    height: 190,
    alignSelf: 'center',
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5A3A8E',
  },
  sectionContainer: {
    marginBottom: 15,
    marginTop: 20,
  },
  sectionButton: {
    padding: 14,
    borderRadius: 20,
    marginBottom: 12,
    marginHorizontal: 20,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#5A3A8E',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  card: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HealthTipsScreen;
