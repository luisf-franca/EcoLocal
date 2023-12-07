import { StyleSheet, Dimensions } from "react-native";
import { FontFamily } from "../../GlobalStyle.js";

const { width, height } = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
  

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top',
    backgroundColor: '#F0F8FF', // Use a cor da paleta aqui
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default styles; 