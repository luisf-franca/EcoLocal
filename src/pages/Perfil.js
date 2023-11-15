import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

function ProfileScreen() {
  const user = {
    name: 'Seu Nome de Usuário',
    profileImage: 'URL_da_imagem_de_perfil',
  };

  const handleButton1 = () => {sdw
    // Implemente a lógica para o primeiro botão aqui.
  };

  const handleButton2 = () => {
    // Implemente a lógica para o segundo botão aqui.
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      <Text style={styles.userName}>{user.name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Botão 1" onPress={handleButton1} />
        <Button title="Botão 2" onPress={handleButton2} />
      </View>
      <View style={styles.insigniaContainer}>
        <Text style={styles.insigniaText}>Seção de Insígnias</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 20,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  insigniaContainer: {
    marginTop: 20,
  },
  insigniaText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
