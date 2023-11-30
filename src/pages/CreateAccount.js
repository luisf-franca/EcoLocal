import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/ecoLocalLogo.png';
import styles from '../styles/CreateAccountStyles';


const CreateAccount = ({ navigation }) => {

const handleCreateAccount = () => {
  navigation.navigate("Login");
};
  
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
  >
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(130, 191, 65, 0.66)', 'rgba(175.98, 205.06, 165.76, 0)']}
        style={styles.greenBackground}
      >
        <View style={styles.clockContainer}>
          {/* Aqui você pode adicionar os elementos do relógio, se necessário */}
        </View>
        <Image style={styles.logo} source={logo} />
      </LinearGradient>

      <View style={styles.createAccountForm}>
        <Text style={styles.createAccountText}>Criar uma conta</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome completo</Text>
          <View style={styles.inputField}>
            <TextInput style={styles.inputValue} placeholder="Nome Sobrenome" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <View style={styles.inputField}>
            <TextInput style={styles.inputValue} placeholder="exemplo@email.com" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Senha</Text>
          <View style={styles.inputField}>
            <TextInput style={styles.inputValue} placeholder="***************" secureTextEntry={true} />
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
        
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.buttonTextCriarConta}>Criar Conta</Text>
            
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
