import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
      <View style={TutorialStyles.container}>
        <Image
          source={require("../../assets/tutorial1.jpg")}
          style={TutorialStyles.backgroundImage}
        />
        <Text style={TutorialStyles.tutorialTitle}>Crie eventos locais</Text>
        <Text style={TutorialStyles.tutorialDescription}>Inicie um evento de limpeza, reciclagem ou até mesmo palestra de conscientização</Text>
        <TouchableOpacity
          style={TutorialStyles.buttonSkip}
          onPress={handleNavigateToLogin}
        >
          <Text style={TutorialStyles.buttonTextSkip}>Pular</Text>
        </TouchableOpacity>
      </View>
    ),
    (
      <View style={TutorialStyles.container}>
        <Image
          source={require("../../assets/tutorial2.jpg")}
          style={TutorialStyles.backgroundImage}
        />
       <Text style={TutorialStyles.tutorialTitle}>Ganhe selos de participação</Text>
       <Text style={TutorialStyles.tutorialDescription}>Eventos criados pela comunidade te darão selos que serão exibidos em seu perfil</Text>
        <TouchableOpacity
          style={TutorialStyles.buttonSkip}
          onPress={handleNavigateToLogin}
        >
          <Text style={TutorialStyles.buttonTextSkip}>Pular</Text>
        </TouchableOpacity>
      </View>
    ),
    (
      <View style={TutorialStyles.container}>
        <Image
          source={require("../../assets/tutorial3.jpg")}
          style={TutorialStyles.backgroundImage}
        />
       <Text style={TutorialStyles.tutorialTitle}>Monitore o seu evento</Text>
       <Text style={TutorialStyles.tutorialDescription}>Você receberá notificações dos usuários participantes do evento e poderá acompanhar todo o progresso</Text>
        <TouchableOpacity
          style={TutorialStyles.button}
          onPress={handleNavigateToLogin}
        >
          <Text style={TutorialStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    ),
  ];

  return (
    <View style={TutorialStyles.container}>
      <Swiper
        style={TutorialStyles.wrapper}
        showsButtons={false}
        loop={false}
        dotColor="#EAEAFF"
        activeDotColor="#317F54"
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
