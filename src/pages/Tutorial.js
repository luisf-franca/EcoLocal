import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import { TutorialStyles } from '../styles/TutorialStyles';
import { useNavigation } from '@react-navigation/native';

const Tutorial = () => {

  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const tutorialData = [
    (
      <LinearGradient
        key={1}
        colors={['#D9E8F5', '#91BED4']}
        style={TutorialStyles.backgroundImage}
      >
        <ImageBackground
          source={require("../../assets/home.jpeg")}
          style={TutorialStyles.backgroundImage}
        >
          <View style={TutorialStyles.container}>
            <TouchableOpacity
              style={TutorialStyles.buttonSkip}
              onPress={handleNavigateToLogin}
            >
              <Text style={TutorialStyles.buttonTextSkip}>Pular</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    ),
    (
      <LinearGradient
        key={1}
        colors={['#D9E8F5', '#91BED4']}
        style={TutorialStyles.backgroundImage}
      >
        <ImageBackground
          key={2}
          source={require("../../assets/home.jpeg")}
          style={TutorialStyles.backgroundImage}
        >
          <View style={TutorialStyles.container}>
            <TouchableOpacity
              style={TutorialStyles.buttonSkip}
              onPress={handleNavigateToLogin}
            >
              <Text style={TutorialStyles.buttonTextSkip}>Pular</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    ),
    (
      <LinearGradient
        key={1}
        colors={['#D9E8F5', '#91BED4']}
        style={TutorialStyles.backgroundImage}
      >
        <ImageBackground
          key={2}
          source={require("../../assets/home.jpeg")}
          style={TutorialStyles.backgroundImage}
        >
          <View style={TutorialStyles.container}>
            <TouchableOpacity
              style={TutorialStyles.buttonSkip}
              onPress={handleNavigateToLogin}
            >
              <Text style={TutorialStyles.buttonTextSkip}>Pular</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    ),
    (
      <LinearGradient
        key={1}
        colors={['#D9E8F5', '#91BED4']}
        style={TutorialStyles.backgroundImage}
      >
        <ImageBackground
          key={2}
          source={require("../../assets/home.jpeg")}
          style={TutorialStyles.backgroundImage}
        >
          <View style={TutorialStyles.container}>
            <TouchableOpacity
              style={TutorialStyles.button}
              onPress={handleNavigateToLogin}
            >
              <Text style={TutorialStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    ),
  ];

  return (
    <View style={TutorialStyles.container}>
      <Swiper
        style={TutorialStyles.wrapper}
        showsButtons={false}
        loop={false}
        dotColor="#D9E8F5"
        activeDotColor="#3ECD95"
      >
        {tutorialData.map((slide, index) => (
          <View key={index} style={TutorialStyles.slide}>
            {slide}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Tutorial;
