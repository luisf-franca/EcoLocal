import { StyleSheet, Dimensions } from 'react-native';
import { FontFamily } from "../../GlobalStyle.js";

const { width, height } = Dimensions.get('window');

export const TutorialStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 1,
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: '#317F54',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 5,
    bottom: -height * 0.1
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: height * 0.02,
    fontFamily: FontFamily.poppinsBold,
  },
  backgroundImage: {
    bottom: height * 0.18,
    height: height * 0.5,
    width: '70%',
    objectFit: 'contain'
  },
  buttonTextSkip:{
    position: 'absolute',
    color: '#317F54',
    fontSize: height * 0.02,
    marginTop: height * 0.20,
    fontFamily: FontFamily.poppinsMedium,
  },
  buttonSkip:{
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.01,
    borderRadius: 5,
    bottom: height * 0.9,
    left: width * 0.35
  },
  slide: {
    flex: 1,
  },
  tutorialTitle: {
    position: 'absolute',
    bottom: height * 0.3,
    color: '#2E401A',
    fontSize: height * 0.03,
    fontFamily: FontFamily.poppinsBold,
    width: width * 0.5,
    textAlign: 'center',
  },
  tutorialDescription: {
    position: 'absolute',
    bottom: height * 0.2,
    width: width * 0.8,
    textAlign: 'center',
    fontSize: height * 0.02,
    fontFamily: FontFamily.poppinsRegular,
  },
});