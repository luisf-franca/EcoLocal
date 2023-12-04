import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import icon from "../../assets/do-utilizador.png";
import perfil from "../../assets/Avatar.png";


function ProfileScreen() {
  const user = {
    name: 'Robervaldo Canabrava',
    profileImage: '../assets/Avatar.png ',
    icon: '../../assets/do-utilizador (1).png',
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.containerPer} >Perfil</Text>
        <View style={styles.containerPessoas}>

          <View style={styles.containerImagem}>
            <Image source={perfil} style={styles.profileImage} />
          </View>

          <View style={styles.containerUsuario}>
            <Image source={icon} style={styles.profileIma} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>

        </View>


        <View style={styles.buttonContainer}>
          <Text style={styles.Pontuacao} > Pontuação  </Text>
          <Text style={styles.pontuacaoNumero}>
            <Text style={styles.pontuacaoNumeros}> 46 </Text>
            <Text>/60</Text>
          </Text>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `60%` }]} />
            <Text style={styles.progressText}></Text>
          </View>

        </View>

        <View style={styles.insigniaContainers}>

          <View style={styles.insigniaContainer}>
            <Text style={styles.texto}>
              Participação em eventos
            </Text>
            <View style={styles.progressBarContainers}>
              <View style={[styles.progressBar, { width: `60%` }]} />
              <Text style={styles.progressText}></Text>
            </View>

            <Text style={styles.texto2}> 14/24 </Text>

          </View>

          <View style={styles.insigniaContainer}>
            <Text style={styles.texto}>
              Criação de eventos
            </Text>
            <View style={styles.progressBarContainers}>
              <View style={[styles.progressBar, { width: `60%` }]} />
              <Text style={styles.progressText}></Text>
            </View>

            <Text style={styles.texto2}> 12/18 </Text>

          </View>
        </View>

        <View style={styles.insigniaContainer}>
          <Text style={styles.texto}>
            Dias ativos na comunidade
          </Text>
          <View style={styles.progressBarContainers}>
            <View style={[styles.progressBar, { width: `60%` }]} />
            <Text style={styles.progressText}></Text>
          </View>

          <Text style={styles.texto2}> 10/16 </Text>

        </View>


      </View>
    </>
  );
}

const styles = StyleSheet.create({

  containerPer:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressBarContainers: {
    width: '90%',
    height: 10,
    backgroundColor: '#e0e0e0', // Cor de fundo da barra não preenchida
    borderRadius: 10,
    overflow: 'hidden', // Garante que o preenchimento não ultrapasse a borda
    marginLeft: 10,
    marginTop: 30,

  },
  icon:{
  
  },

  progressBarContainer: {
    width: '90%',
    height: 10,
    backgroundColor: '#e0e0e0', // Cor de fundo da barra não preenchida
    borderRadius: 10,
    overflow: 'hidden', // Garante que o preenchimento não ultrapasse a borda
    marginLeft: 15,

  },
  progressBar: {
    height: '100%',
    backgroundColor: '#27ae90', // Cor da barra preenchida
  },
  progressText: {

    alignSelf: 'center',
    marginTop: 2,
    color: '#fff', // Cor do texto (opcional)
    fontWeight: 'bold', // Estilo de texto (opcional)
  },

  container: {
    flex: 1,
    marginTop: 75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    objectFit: 'contain'
  },
  userName: {
    fontSize: 15,
    marginTop: 10,
    color:'#27ae90'
  },
  buttonContainer: {
    height: 90,
    marginTop: 20,
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 0.5,


  },
  insigniaContainers: {
    flexDirection: 'row'
  },
  insigniaContainer: {
    marginTop: 20,
    width: '40%',
    height: 150,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 0.5,
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#d5e4c9',

  },
  texto: {
    textAlign: 'center',
    fontSize: 20
  },

  texto2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },


  insigniaText: {
    fontSize: 16,
  },
  containerImagem: {
    
    width: '40%',
    marginLeft: 20,
    borderRadius: 200,


  },
  containerUsuario: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: '48%',
    marginTop: '10%'
    
  },
  profileIma:{
    marginTop: 10,
    marginRight: 10,
    
  },

  Pontuacao: {
    marginLeft: 10,
    marginTop: 10,

  },
  pontuacaoNumero:
  {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 40,
    fontSize: 20
  },
  pontuacaoNumeros:{
    fontSize: 26,
    fontWeight: 'bold',

  },


});

export default ProfileScreen;
