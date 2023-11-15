import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
    fontFamily: 'Poppins',
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
    fontFamily: 'Poppins',
    fontWeight: '900',
    wordWrap: 'break-word',
  },
  emailValue: {
    color: '#2E401A',
    fontSize: 2 * vh,
    fontFamily: 'Poppins',
    fontWeight: '500',
    wordWrap: 'break-word',
  },
  welcomeText: {
    color: '#2E401A',
    fontSize: 3.2 * vh,
    fontFamily: 'Poppins',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  inputContainer: {
    width: 86.6 * vw,
    // Add other styles as needed
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
  inputValue: {
    color: '#2E401A',
    fontSize: 1.5 * vh,
    fontWeight: '500',
  },
  passwordField: {
    width: 86.6 * vw,
    height: 6.8 * vh,
    borderRadius: 1 * vh,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2E401A',
    // Add other styles as needed
  },
  passwordLabel: {
    color: '#2E401A',
    fontSize: 1.1 * vh,
    fontFamily: 'Poppins',
    fontWeight: '900',
    wordWrap: 'break-word',
  },
  passwordValue: {
    color: '#2E401A',
    fontSize: 1.5 * vh,
    fontFamily: 'Poppins',
    fontWeight: '500',
    wordWrap: 'break-word',
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
    fontSize: 1.3 * vh,
    fontFamily: 'Poppins',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  buttonContainer: {
    // Add styles for buttonContainer
  },
  loginButton: {
    color: 'white',
    fontSize: 2.5 * vh,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 2.5,
    wordWrap: 'break-word',
  },
  createAccountButton: {
    color: '#317F54',
    fontSize: 1.7 * vh,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 2.5,
    wordWrap: 'break-word',
  },
});

export default styles;
