import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from "../../GlobalStyle.js";

const { width, height } = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greenBackground: {
    width: 100 * vw,
    height: 28 * vh,
    position: 'absolute',
  },
  logo: {
    width: 73 * vw,
    height: 77 * vh,
    marginTop: - 18 * vh,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute'
  },
  createAccountForm: {
    position: 'absolute',
    top: 35 * vh,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    gap: 4 * vh,
  },
  createAccountText: {
    color: '#2E401A',
    fontSize: 4 * vh,
    fontFamily: FontFamily.poppinsBold,
  },
  inputContainer: {
    width: 86.6 * vw,
  },
  inputLabel: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontWeight: '900',
    alignSelf: 'flex-start'
  },
  inputField: {
    height: 6.8 * vh,
    borderRadius: 1 * vh,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2E401A',
    justifyContent: 'center',
    display: 'flex',
    paddingLeft: 3 * vw
  },
  inputValue: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontFamily: FontFamily.poppinsRegular,
  },
  createAccountButton: {
    backgroundColor: '#317F54',
    borderRadius: 1 * vh,
    width: 86.6 * vw,
    height: 6.8 * vh,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonTextCriarConta: {
    fontSize: 2.5 * vh,
    fontFamily: FontFamily.poppinsBold,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default styles;