import React, { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";
import { BreathingComponent } from "./src/components/Breathing";
import { MenuItem } from "./src/components/presentation/MenuItem";
import * as Font from "expo-font";
import { UbuntuText } from "./src/components/presentation/UbuntuText";
import { EducationComponent } from "./src/components/Education";

enum MenuItemEnum {
  BreathingTechniques = "Breathing Techniques",
  Education = "Education",
  Tracker = "Alcohol and Caffeine Trackers",
  KindWords = "Kind Words",
  Meditation = "Meditation",
  Outpost = "See an Outpost Health Provider"
}

export default function App() {
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItemEnum | null>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const onMenuItemPress = (key: string) => {
    //@ts-ignore
    setCurrentMenuItem(key);
  };

  const renderSelectedMenuItem = () => {
    switch (MenuItemEnum[currentMenuItem]) {
      case MenuItemEnum.BreathingTechniques:
        return <BreathingComponent back={() => setCurrentMenuItem(null)} />;
      case MenuItemEnum.Education:
        return <EducationComponent back={() => setCurrentMenuItem(null)} />;
      case MenuItemEnum.Outpost:
        return linkToOutpost();
    }
  };

  const linkToOutpost = () => {
    Linking.canOpenURL("https://www.outpost.health/").then(supported => {
      if (supported) {
        Linking.openURL("https://www.outpost.health/");
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  useEffect(() => {
    Font.loadAsync({
      Ubuntu: require("./src/assets/Ubuntu.ttf")
    }).then(x => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <UbuntuText style={styles.header}>AnxieFree</UbuntuText>
          {!currentMenuItem ? (
            <>
              <View style={styles.menuItemsContainer}>
                {Object.keys(MenuItemEnum).map(key => (
                  <MenuItem
                    onPress={() => onMenuItemPress(key)}
                    title={MenuItemEnum[key]}
                    key={key}
                  />
                ))}
              </View>
              <UbuntuText>Brought to you by:</UbuntuText>
              <Image
                style={styles.logo}
                source={require(`./src/assets/outpost.png`)}
              />
            </>
          ) : (
            <>
              <Text>{MenuItemEnum[currentMenuItem]}</Text>
              {renderSelectedMenuItem()}
            </>
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fa",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Ubuntu"
  },
  logo: {
    marginBottom: 50
  },
  menuItemsContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  header: {
    fontSize: 40,
    marginTop: 60,
    marginBottom: 50
  }
});
