import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [isDetailsView, setIsDetailsView] = useState(false);

  // Dummy user details (Replace with actual user data from state/context)
  const userData = {
    name: "Barbie",
    age: "xx",
    height: "xx",
    weight: "xx",
    ongoingPeriods: true, // true = Green Tick, false = Red Cross
    healthDiagnosis: "No major issues",
    pregnant: false, // true = Green Tick, false = Red Cross
    moodSwings: "Yes", // "Yes" or "No"
  };

  return (
    <View style={styles.container}>
      {/* Header Title */}
      <Text style={styles.header}>Home</Text>

      {/* User Details Card with Selector */}
      <View style={styles.welcomeCard}>
        <View style={styles.textContainer}>
          {/* Selector Buttons */}
          <View style={styles.selectorContainer}>
            <TouchableOpacity
              style={[styles.selector, !isDetailsView && styles.activeSelector]}
              onPress={() => setIsDetailsView(false)}
            >
              <Text style={[styles.selectorText, !isDetailsView && styles.activeText]}>Basics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.selector, isDetailsView && styles.activeSelector]}
              onPress={() => setIsDetailsView(true)}
            >
              <Text style={[styles.selectorText, isDetailsView && styles.activeText]}>Details</Text>
            </TouchableOpacity>
          </View>

          {/* Conditional Display Based on Selection */}
          {!isDetailsView ? (
            <>
              <Text style={styles.nameText}>{userData.name}</Text>
              <Text style={styles.userInfo}>Age: {userData.age}</Text>
              <Text style={styles.userInfo}>Height: {userData.height}</Text>
              <Text style={styles.userInfo}>Weight: {userData.weight}</Text>
            </>
          ) : (
            <>
              <Text style={styles.userInfo}>
                Ongoing Periods: {userData.ongoingPeriods ? "✅" : "❌"}
              </Text>
              <Text style={styles.userInfo}>Health Diagnosis: {userData.healthDiagnosis}</Text>
              <Text style={styles.userInfo}>
                Pregnant: {userData.pregnant ? "✅" : "❌"}
              </Text>
              <Text style={styles.userInfo}>Mood Swings: {userData.moodSwings}</Text>

              {/* Edit Button (Only in Details View) */}
              <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("PreHome")}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image source={require("../assets/UserIcon.png")} style={styles.avatar} />
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("VitalView")}>
          <Image source={require("../assets/VitalView.png")} style={styles.icon} />
          <Text style={styles.label}>Vital View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Goals")}>
          <Image source={require("../assets/Goals.png")} style={styles.icon} />
          <Text style={styles.label}>Goals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("EmpowermentHub")}>
          <Image source={require("../assets/EmpowerHub.png")} style={styles.icon} />
          <Text style={styles.label}>Empower Hub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CommunityConnect")}>
          <Image source={require("../assets/Community.png")} style={styles.icon} />
          <Text style={styles.label}>Community</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    position: "absolute",
    top: 55,
  },
  welcomeCard: {
    width: "90%",
    backgroundColor: "#D1A4F1",
    borderRadius: 20,
    flexDirection: "row",
    padding: 25,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 100,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  selectorContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 5,
    justifyContent: "center",
    marginBottom: 10,
  },
  selector: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 15,
  },
  activeSelector: {
    backgroundColor: "#5A3A8E",
  },
  selectorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A3A8E",
  },
  activeText: {
    color: "#FFFFFF",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userInfo: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 5,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 5,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#5A3A8E",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems:'center',
  },
  editText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  grid: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "45%",
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
    padding: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A3A8E",
    marginTop: 5,
  },
  logout: {
    fontSize: 18,
    color: "gray",
    marginTop: 50,
    marginBottom: 20,
  },
});
