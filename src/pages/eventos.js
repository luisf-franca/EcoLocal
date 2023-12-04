import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import icon from "../../assets/procurar.png";
import icons from "../../assets/controles-deslizantes-de-configuracoes.png";
import icon2 from "../../assets/do-utilizador.png";
const { width, height } = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

function PaginaEventos({ navigation }) {

  const handlePerfil = () => {
    navigation.navigate("Perfil");
  };

  const handleEvento = () => {
    navigation.navigate("CreateEvento");
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ContainerTitulo}>
        <Text style={styles.ContainerEvento}> Eventos </Text>
        <TouchableOpacity onPress={handlePerfil}>
          <Image
            style={styles.imagemEvento}
            source={require('../../assets/Avatar.png')}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.containerBuscar}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.textoBuscar} >Buscar por localização</Text>
        <Image source={icons} style={styles.icons} />
      </View>


      <View>
        < Text style={styles.textoEvento} > Eventos perto de você </Text>

        <TouchableOpacity style={styles.criarEvento} onPress={handleEvento}>
        
          <Text style={styles.criarEventoText}>Criar novo evento</Text>
        </TouchableOpacity>

        <View style={styles.containerEventos}>
          <View style={styles.img} >
          </View>

          <View style={styles.containerEventosDireita}>
            <Text style={styles.textoTitulo}> Coleta seletiva </Text>

            <View style={styles.conteinerUsuario}>
              <Image source={icon2} style={styles.iconUsuario} />
              <Text style={styles.textoUsuario}> Robervaldo Canabrava </Text>
            </View>

            <View style={styles.conteinerBairro}>
              <Text style={styles.textoBairro}> Várzea</Text>
              <View style={styles.conteinerHoras}>
                <Text style={styles.textoHoras} >3 horas</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.containerEventos}>
          <View style={styles.img} >
          </View>

          <View style={styles.containerEventosDireita}>
            <Text style={styles.textoTitulo}> Limpeza na praça  </Text>

            <View style={styles.conteinerUsuario}>
              <Image source={icon2} style={styles.iconUsuario} />
              <Text style={styles.textoUsuario}> Aeronauta Barata </Text>
            </View>

            <View style={styles.conteinerBairro}>
              <Text style={styles.textoBairro}> Várzea</Text>
              <View style={styles.conteinerHoras}>
                <Text style={styles.textoHoras} >8 horas</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.containerEventos}>
          <View style={styles.img} >
          </View>

          <View style={styles.containerEventosDireita}>
            <Text style={styles.textoTitulo}> Palestra conscientização </Text>

            <View style={styles.conteinerUsuario}>
              <Image source={icon2} style={styles.iconUsuario} />
              <Text style={styles.textoUsuario}> Jardel Garcia </Text>
            </View>

            <View style={styles.conteinerBairro}>
              <Text style={styles.textoBairro}> UNA </Text>
              <View style={styles.conteinerHoras}>
                <Text style={styles.textoHoras} >16 horas</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.containerEventos}>
          <View style={styles.img} >
          </View>

          <View style={styles.containerEventosDireita}>
            <Text style={styles.textoTitulo}> Horta comunitária </Text>

            <View style={styles.conteinerUsuario}>
              <Image source={icon2} style={styles.iconUsuario} />
              <Text style={styles.textoUsuario}> Luis Gabriel </Text>
            </View>

            <View style={styles.conteinerBairro}>
              <Text style={styles.textoBairro}> Várzea</Text>
              <View style={styles.conteinerHoras}>
                <Text style={styles.textoHoras} >1 hora</Text>
              </View>
            </View>
          </View>

        </View>


      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    marginTop: '15%',
   

  },
  ContainerTitulo: {
    marginLeft: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ContainerEvento: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  containerBuscar: {
    flexDirection: 'row',
    width: '90%',
    height: 5 * vh,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 0.5,
    marginLeft: 20,
    backgroundColor: 'rgba(130, 191, 65, 0.15)',

  },

  criarEvento:{
    marginLeft: '6%',
    marginTop: 10,
  },

  criarEventoText: {
    color: '#317F54',
    marginBottom: -15,
    fontSize: 18,
    textAlign: 'right',
    marginRight: 25
  },

  icon: {
    marginLeft: 10,
    marginTop: 10,
  },

  textoBuscar: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
  },
  imagemEvento: {
    height: 7 * vh,
    objectFit: 'contain'

  },
  icons: {
    marginLeft: 120,
    marginTop: 10,
  },


  textoEvento: {
    marginLeft: '5%',
    fontSize: 17,
    marginTop: 10,

  },

  containerEventos: {
    flexDirection: 'row',
    height: 110,
    marginTop: 20,
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 0.5,
    maxHeight: 40 * vh,
    maxWidth: 90 * vw,
  },
  img: {
    margin: 10,
    width: '30%',
    height: '80%',
    backgroundColor: ' rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
  },
  containerEventosDireita: {
    margin: 10,

  },
  textoTitulo: {
    fontSize: 2 * vh,
    fontWeight: 'bold',
    maxWidth: 60 * vw,
  },
  conteinerUsuario: {
    flexDirection: 'row',
    marginTop: 10,

  },
  textoUsuario: {
    color: '#317F54',
  },

  conteinerBairro: {
    flexDirection: 'row',
    marginTop: 10
  },

  textoBairro: {
    marginRight: 20,
    fontSize: 15,
  },

  conteinerHoras: {
    backgroundColor: ' rgba(0, 0, 0, 0.07)',
    borderRadius: 10,
    padding: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },

  textoHoras: {
    color: '#317F54',
  }


});



export default PaginaEventos;
