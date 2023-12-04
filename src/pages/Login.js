import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/ecoLocalLogo.png';
import styles from '../styles/LoginStyles';

const Login = ({ navigation }) => {

  const handleLogin = () => {
    navigation.navigate("Eventos");
  };

  const handleForgotPassword = () => {
    navigation.navigate("PasswordReset");
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };
  
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
  >
    <View style={styles.loginContainer}>
      <LinearGradient
        colors={['rgba(130, 191, 65, 0.66)', 'rgba(175.98, 205.06, 165.76, 0)']}
        style={styles.greenBackground}
      >
        <View style={styles.clockContainer}>
          {/* Aqui você pode adicionar os elementos do relógio, se necessário */}
        </View>
        <Image style={styles.logo} source={logo} />
      </LinearGradient>

      <View style={styles.loginForm}>
        <Text style={styles.welcomeText}>Bem vindo!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <View style={styles.inputField}>
            <TextInput style={styles.inputValue} placeholder="exemplo@email.com" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Senha</Text>
          <View style={styles.passwordField}>
            <TextInput style={styles.passwordValue} placeholder="***************" secureTextEntry={true} />
          </View>
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonTextLogin}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.buttonTextCriarConta}>Criar Conta</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
