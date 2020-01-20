import React, { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { UbuntuText } from "./presentation/UbuntuText";

interface IProps {
  back: () => void;
}

export const EducationComponent: React.FC<IProps> = ({ back }) => {
  const goBack = () => {
    back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <UbuntuText style={styles.header}>Anxiety Disorders</UbuntuText>
        <UbuntuText>
          Anxiety disorders can affect anyone at any age, and they are the most
          common mental health problem. Sometimes, anxiety disorders are
          triggered by a specific event or stressful life experience. Anxiety
          disorders may be more likely to occur when we have certain ways of
          looking at things (like believing that everything must be perfect) or
          learn unhelpful coping strategies from others. But sometimes there
          just doesn’t seem to be a reason.
        </UbuntuText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 50
  },
  header: {
    fontSize: 30
  },
  contentContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: 20
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
