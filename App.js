import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraScreen from './screens/CalculadoraScreen';
import { Layout, Input, ButtonRounded } from './components';
import { Button } from 'react-native-web';
import ButtonPrimary from './components/ButtonPrimary';

export default function App() {
  return (
      <Layout title="Contacto">
        <Input label="Email:" placeholder="name@mail.com" type="email-addres" />
        <Input label="Asunto:" placeholder="Consulta" />
        <Input label="Mensaje:" placeholder="Escribir aqui..." lines={4}/>

        <ButtonRounded
        title="Enviar"
        onPress={() => Alert.alert('Enviado', 'Mensaje enviado correctamente')}
        />
        <ButtonRounded
        title="Cancelar"
        isPrimary={false}
        onPress={() => Alert.alert('Cancelado', 'Envio cancelado')}
        />
        
        <ButtonPrimary title="boton" />
      </Layout>
      
  );
}

