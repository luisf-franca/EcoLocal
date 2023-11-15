import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

const Home = () => {
    return (
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.title}>Eventos próximos</Text>
        {/* Aqui você pode adicionar a lista de eventos próximos */}
        <Text style={HomeStyles.subtitle}>Crie um evento</Text>
        {/* Aqui você pode adicionar o botão ou formulário para criar um evento */}
      </View>
    );
  };

  export default Home;