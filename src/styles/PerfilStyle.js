import { StyleSheet } from "react-native";

const PerfilStyle = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      bio: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
      },


      containerImagem:{
        backgroundColor: 'black',
        width: '50%',
      }
    });

export default PerfilStyle; 