import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const healthSections = [
  {
    section: 'Blossom Cycle Care',
    tips: [
      { title: 'Hygiene First', content: 'Change pads or tampons every 4-6 hours. Use breathable cotton underwear.' },
      { title: 'Stay Hydrated', content: 'Drink plenty of water to stay hydrated and support overall health.' },
    ],
  },
  {
    section: 'Motherhood Wellness',
    tips: [
      { title: 'Nutritional Boost', content: 'Eat a balanced diet rich in folic acid, iron, and calcium.' },
      { title: 'Gentle Movements', content: 'Engage in moderate physical activity to maintain a healthy pregnancy.' },
    ],
  },
  {
    section: 'Mind & Mood Harmony',
    tips: [
      { title: 'Stress-Free Living', content: 'Practice mindfulness and relaxation techniques to reduce stress.' },
      { title: 'Restorative Sleep', content: 'Ensure 7-9 hours of sleep to maintain mental well-being.' },
    ],
  },
  {
    section: 'Golden Grace (Menopause Care)',
    tips: [
      { title: 'Balanced Diet', content: 'Include calcium and vitamin D-rich foods to support bone health.' },
      { title: 'Stay Active', content: 'Regular exercise helps manage symptoms and maintain mobility.' },
    ],
  },
  {
    section: 'Vital Curves (Breast Health)',
    tips: [
      { title: 'Self-Check Routine', content: 'Perform regular self-exams to detect any unusual changes early.' },
      { title: 'Healthy Lifestyle', content: 'Maintain a balanced diet and exercise to support breast health.' },
    ],
  },
  {
    section: 'Hormonal Balance (PCOS Care)',
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
      <Text style={styles.header}>Stay Informed, Stay Healthy</Text>
      
      {!selectedSection ? (
        <View style={styles.sectionContainer}>
          {healthSections.map((section, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sectionButton, { backgroundColor: index % 2 === 0 ? '#FF6F61' : '#6A0572' }]}
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
            <Card key={index} style={styles.card}>
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
    backgroundColor: '#FAF3F0',
    padding: 10,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6A0572',
  },
  sectionContainer: {
    marginBottom: 15,
    marginTop: 40,
  },
  sectionButton: {
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#6A0572',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
});

export default HealthTipsScreen;
