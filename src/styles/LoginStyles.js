import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from "../../GlobalStyle.js";

const { width, height } = Dimensions.get('window');

const vw = width / 100;
const vh = height / 100;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  greenBackground: {
    width: 100 * vw,
    height: 28 * vh,
    position: 'absolute',
  },
  clockContainer: {
    width: 100 * vw,
    height: 6 * vh,
    position: 'absolute',
  },
  clockText: {
    color: 'white',
    fontSize: 1.5 * vh,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '900',
    wordWrap: 'break-word',
  },
  logo: {
    width: 73 * vw,
    height: 77 * vh,
    marginTop: - 15 * vh,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute'
  },
  loginForm: {
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
  emailLabel: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontWeight: '900',
    wordWrap: 'break-word',
    fontFamily: FontFamily.poppinsBold,
  },
  emailValue: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontWeight: '500',
    wordWrap: 'break-word',
  },
  welcomeText: {
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
  passwordField: {
    width: 86.6 * vw,
    height: 6.8 * vh,
    borderRadius: 1 * vh,
    overflow: 'hidden',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2E401A',
    paddingLeft: 3 * vw
  },
  passwordLabel: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontFamily: FontFamily.poppinsRegular,
  },
  passwordValue: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontFamily: FontFamily.poppinsBold,
  },
  passwordIcon: {
    width: 1.61 * vw,
    height: 1.015 * vh,
    left: 31.42 * vw,
    top: 2.87 * vh,
    position: 'absolute',
    backgroundColor: '#2E401A',
    // Add other styles as needed
  },
  forgotPassword: {
    color: '#2E401A',
    textAlign: 'center',
    fontSize: 2 * vh,
    fontFamily: FontFamily.poppinsMedium,
  },
  buttonContainer: {
  },
  loginButton: {
    backgroundColor: '#317F54',
    borderRadius: 1 * vh,
    width: 86.6 * vw,
    height: 6.8 * vh,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  createAccountButton: {
    marginTop: 2 * vh,
    borderRadius: 1 * vh,
    borderColor: '#317F54',
    borderWidth: 2,
    width: 86.6 * vw,
    height: 6.8 * vh,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonTextLogin: {
    fontSize: 2.5 * vh,
    fontFamily: FontFamily.poppinsBold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonTextCriarConta: {
    fontSize: 2.5 * vh,
    fontFamily: FontFamily.poppinsBold,
    color: '#317F54',
    textAlign: 'center',
  },
});

export default styles;
