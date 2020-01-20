import React, { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { UbuntuText } from "./presentation/UbuntuText";

interface IProps {
  back: () => void;
}

export const BreathingComponent: React.FC<IProps> = ({ back }) => {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [breathingStep, setBreathingStep] = useState<number | null>(null);
  const [circleAnimation] = useState(new Animated.Value(150));
  const [intervalId, setIntervalId] = useState();

  const startExercise = () => {
    setSeconds(5);
    setBreathingStep(1);
  };

  const goBack = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    back();
  };

  useEffect(() => {
    if (breathingStep === 1) {
      animate(400, 4000);
      breath();
    } else if (breathingStep === 2) {
      setSeconds(8);
      animate(150, 7000);
      breath();
    } else if (breathingStep === 3) {
      setSeconds(9);
      animate(400, 8000);
      breath();
    }
  }, [breathingStep]);

  useEffect(() => {
    if (seconds === 0 && breathingStep === 1) {
      clearInterval(intervalId);
      setSeconds(8);
      setBreathingStep(2);
    } else if (seconds === 0 && breathingStep === 2) {
      clearInterval(intervalId);
      setBreathingStep(3);
    } else if (seconds === 0 && breathingStep === 3) {
      clearInterval(intervalId);
      animate(150, 1);
      setBreathingStep(null);
      setSeconds(null);
    }
  }, [seconds]);

  const breath = () => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    setIntervalId(interval);
  };

  const animate = (toValue: number, duration: number) => {
    Animated.timing(circleAnimation, {
      toValue: toValue,
      duration: duration
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <UbuntuText>The 4-7-8 Breathing Technique</UbuntuText>
        <UbuntuText>
          The 4-7-8 breathing technique requires a person to focus on taking a
          long, deep breath in and out. Rhythmic breathing is a core part of
          many meditation and yoga practices as it promotes relaxation.
        </UbuntuText>
        <TouchableOpacity
          style={styles.circleContainer}
          onPress={startExercise}
        >
          <Animated.View
            style={[
              styles.circle,
              { width: circleAnimation, height: circleAnimation }
            ]}
          >
            <UbuntuText style={styles.circleText}>
              {seconds !== null ? seconds : "Tap Here To Start"}
            </UbuntuText>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => goBack()}>
        <View style={styles.button}>
          <UbuntuText style={styles.buttonText}>Back</UbuntuText>
        </View>
      </TouchableOpacity>
    </View>
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
  circleContainer: {
    minHeight: 400,
    justifyContent: "center"
  },
  circle: {
    backgroundColor: "blue",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    color: "#FFF",
    fontSize: 30,
    textAlign: "center"
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
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  }
});
