import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const goalOptions = [
  { id: '1', title: 'Body Detox' },
  { id: '2', title: 'Mental Wellness' },
  { id: '3', title: 'Healthy Eating' },
  { id: '4', title: 'Fitness & Exercise' },
  { id: '5', title: 'Better Sleep' },
  { id: '6', title: 'Stress Management' },
];

const GoalCard = ({ goal, onEdit, onDelete, onComplete }) => {
  const { id, title, timeline, timelineUnit, startDate, selectedTopic, completed } = goal;
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (!completed) {
      timer = setInterval(() => {
        const progress = calculateProgress();
        setCurrentProgress(progress);
        
        if (progress >= 1 && !completed) {
          onComplete(id);
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [completed]);

  const calculateProgress = () => {
    if (!startDate || !timeline) return 0;
    const now = new Date();
    const start = new Date(startDate);
    let end;

    switch (timelineUnit) {
      case 'days':
        end = new Date(start.getTime() + timeline * 24 * 60 * 60 * 1000);
        break;
      case 'months':
        end = new Date(start.setMonth(start.getMonth() + timeline));
        break;
      case 'minutes':
        end = new Date(start.getTime() + timeline * 60 * 1000);
        break;
      case 'seconds':
        end = new Date(start.getTime() + timeline * 1000);
        break;
      default:
        return 0;
    }

    const totalDuration = end - start;
    const elapsed = now - start;
    return Math.min(elapsed / totalDuration, 1);
  };

  return (
    <View style={[styles.card, completed && styles.completedCard]}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Icon name="delete" size={24} color="#ff4444" />
        </TouchableOpacity>
      </View>
      <Text style={styles.topicText}>Topic: {selectedTopic}</Text>
      <ProgressBar 
        progress={completed ? 1 : currentProgress} 
        color={completed ? "#4CAF50" : "#6a5acd"} 
        style={styles.progressBar} 
      />
      <Text style={styles.progressText}>
        {completed ? "Completed!" : `${Math.round(currentProgress * 100)}% Complete`}
      </Text>
      <Text style={styles.timelineText}>Timeline: {timeline} {timelineUnit}</Text>
      {!completed && (
        <TouchableOpacity onPress={() => onEdit(goal)} style={styles.editButton}>
          <Text style={styles.editText}>Edit Goal</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const GoalsTrackerScreen = () => {
  const [goals, setGoals] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showDoneAnimation, setShowDoneAnimation] = useState(false);
  const [showCheersAnimation, setShowCheersAnimation] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTimeline, setGoalTimeline] = useState('');
  const [timelineUnit, setTimelineUnit] = useState('seconds');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [completingGoalId, setCompletingGoalId] = useState(null);

  const handleGoalComplete = (goalId) => {
    // Prevent multiple completions of the same goal
    if (completingGoalId === goalId) return;
    
    setCompletingGoalId(goalId);
    setShowCheersAnimation(true);
    
    // Update the goal's completed status
    setGoals(prevGoals =>
      prevGoals.map(g =>
        g.id === goalId ? { ...g, completed: true } : g
      )
    );

    // Hide the animation after delay
    setTimeout(() => {
      setShowCheersAnimation(false);
      setCompletingGoalId(null);
    }, 3000);
  };

  const handleSetGoal = () => {
    if (!goalTitle || !goalTimeline) return;

    const newGoal = {
      id: Math.random().toString(),
      title: goalTitle,
      timeline: parseInt(goalTimeline, 10),
      timelineUnit,
      startDate: new Date().toISOString(),
      progress: 0,
      selectedTopic,
      completed: false,
    };

    setGoals([...goals, newGoal]);
    setShowGoalModal(false);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
    handleCompleteGoal();
    resetForm();
  };
  const handleCompleteGoal = () => {
    setShowDoneAnimation(true);
    setTimeout(() => {
      setShowDoneAnimation(false);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }, 3000);
  };

  const resetForm = () => {
    setGoalTitle('');
    setGoalTimeline('');
    setTimelineUnit('seconds');
    setSelectedTopic('');
    setEditingGoal(null);
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setGoalTitle(goal.title);
    setGoalTimeline(goal.timeline.toString());
    setTimelineUnit(goal.timelineUnit);
    setSelectedTopic(goal.selectedTopic);
    setShowGoalModal(true);
  };

  const handleUpdateGoal = () => {
    if (!goalTitle || !goalTimeline) return;

    const updatedGoals = goals.map((goal) =>
      goal.id === editingGoal.id
        ? {
            ...goal,
            title: goalTitle,
            timeline: parseInt(goalTimeline, 10),
            timelineUnit,
            selectedTopic,
            startDate: new Date().toISOString(),
            completed: false
          }
        : goal
    );

    setGoals(updatedGoals);
    setShowGoalModal(false);
    resetForm();
  };

  const handleDeleteGoal = (id) => {
    Alert.alert(
      'Delete Goal',
      'Are you sure you want to delete this goal?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => setGoals(goals.filter((goal) => goal.id !== id)) },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Goals, Your Journey</Text>

      <TouchableOpacity onPress={() => setShowTopicModal(true)} style={styles.setGoalButton}>
        <Text style={styles.setGoalText}>Set a New Goal</Text>
      </TouchableOpacity>

      {goals.length === 0 ? (
        <Text style={styles.noGoalsText}>No goals set yet. Start your journey now!</Text>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onEdit={handleEditGoal}
            onDelete={handleDeleteGoal}
            onComplete={handleGoalComplete}
          />
        ))
      )}
      {/* Done Animation */}
{showDoneAnimation && (
  <View style={styles.doneAnimationContainer}>
    <LottieView
      source={require('../assets/DoneAnimation.json')}
      autoPlay
      loop={false}
      style={styles.doneAnimation}
    />
  </View>
)}

      {/* Celebration Animation */}
      {showCelebration && (
        <View style={styles.celebrationContainer}>
          <LottieView
            source={require('../assets/celebration.json')}
            autoPlay
            loop={false}
            style={styles.celebration}
          />
          <Text style={styles.celebrationText}>Hurray! Your goal is set 🎉</Text>
        </View>
      )}

      {/* Cheers Animation */}
      {showCheersAnimation && (
        <View style={styles.cheersAnimationContainer}>
          <LottieView
            source={require('../assets/cheers.json')}
            autoPlay
            loop={false}
            style={styles.cheersAnimation}
            onAnimationFinish={() => setShowCheersAnimation(false)}
          />
          <Text style={styles.cheersText}>Congratulations! Goal Complete! 🎉</Text>
        </View>
      )}

      {/* Modal for Topic Selection */}
      <Modal visible={showTopicModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Topic</Text>
            {goalOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.topicOption}
                onPress={() => {
                  setSelectedTopic(option.title);
                  setShowGoalModal(true);
                  setShowTopicModal(false);
                }}>
                <Text style={styles.topicText}>{option.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setShowTopicModal(false)} style={styles.closeModal}>
              <Text style={styles.closeModalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for Setting/Editing Goals */}
      <Modal visible={showGoalModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editingGoal ? 'Edit Goal' : 'Set a New Goal'}</Text>
            <Text style={styles.selectedTopic}>Selected Topic: {selectedTopic}</Text>
            <TextInput
              style={styles.input}
              placeholder="Goal Title"
              value={goalTitle}
              onChangeText={setGoalTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Timeline"
              value={goalTimeline}
              onChangeText={setGoalTimeline}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={timelineUnit}
              style={styles.picker}
              onValueChange={(itemValue) => setTimelineUnit(itemValue)}>
              <Picker.Item label="Seconds" value="seconds" />
              <Picker.Item label="Minutes" value="minutes" />
              <Picker.Item label="Days" value="days" />
              <Picker.Item label="Months" value="months" />
            </Picker>
            <TouchableOpacity
              onPress={editingGoal ? handleUpdateGoal : handleSetGoal}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>{editingGoal ? 'Update Goal' : 'Set Goal'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setShowGoalModal(false);
              resetForm();
            }} style={styles.closeModal}>
              <Text style={styles.closeModalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a5acd',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  setGoalButton: {
    backgroundColor: '#6a5acd',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  setGoalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noGoalsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#F6E7C1',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  topicText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  timelineText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#6a5acd',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 70,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  doneAnimationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneAnimation: {
    width: 200,
    height: 200,
  },
  celebrationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  celebration: {
    width: 200,
    height: 200,
  },
  celebrationText: {
    fontSize: 18,
    color: '#6a5acd',
    fontWeight: 'bold',
    marginTop: 10,
  },
  cheersAnimationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cheersAnimation: {
    width: 300,
    height: 300,
  },
  cheersText: {
    fontSize: 24,
    color: '#6a5acd',
    fontWeight: 'bold',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6a5acd',
    marginBottom: 10,
    textAlign: 'center',
  },
  selectedTopic: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#6a5acd',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeModal: {
    padding: 10,
    alignItems: 'center',
  },
  closeModalText: {
    color: '#6a5acd',
    fontSize: 16,
  },
  topicOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginVertical: 5,
  },
  topicText: {
    fontSize: 14,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  completedCard: {
    backgroundColor: '#E8F5E9', // Light green background for completed goals
    opacity: 0.9,
  },
});

export default GoalsTrackerScreen;