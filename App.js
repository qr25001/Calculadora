import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraScreen from './screens/CalculadoraScreen';
import { Layout } from './components';
import { Button } from 'react-native-web';
import ButtonPrimary from './components/ButtonPrimary';

export default function App() {
  return (
      <Layout title="Contacto">
                   <ButtonPrimary title="boton" />
      </Layout>
      
  );
}

