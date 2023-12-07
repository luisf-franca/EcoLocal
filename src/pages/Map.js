import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import userMarker from '../../assets/userMarker.png';
import styles from '../styles/MapStyles';

const Map = () => {
  const [location, setLocation] = useState(null);
  const mapViewRef = useRef(null);
  const { width, height } = Dimensions.get('window');

  const vw = width / 100;
  const vh = height / 100;

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Permissão de localização negada');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    } catch (error) {
      console.error('Erro ao obter a localização atual:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos próximos</Text>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsPointsOfInterest={false}
          //provider="google"
          showsUserLocation={false}
          providerProps={{
            apiKey: 'AIzaSyCSfIsK_Uv45-Mxn6OkD31qxrr-9cPHuW8',
          }}
        >
          {/* Adicione um marcador na localização atual */}
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Você está aqui"
          >
            <View style={{ width: vw * 0.1, height: vh * 0.1 }}>
              <Image
                source={userMarker}
                style={{ resizeMode: 'contain' }}
              />
            </View>
          </Marker>
        </MapView>
      )}
      <Text style={styles.subtitle}>Crie um evento</Text>
      {/* Aqui você pode adicionar o botão ou formulário para criar um evento */}
    </View>
  );
};

export default Map;
