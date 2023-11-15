import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const TutorialStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: height * 1,
  },
  button: {
    backgroundColor: '#3ECD95',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 5,
    bottom: height * 0.20
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: height * 0.02
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  buttonTextSkip:{
    color: '#304269',
    fontWeight: 'bold',
    fontSize: height * 0.02
  },
  buttonSkip:{
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.01,
    borderRadius: 5,
    bottom: height * 0.9,
    right: width * 0.35
  },
  slide: {
    flex: 1,
  },
});