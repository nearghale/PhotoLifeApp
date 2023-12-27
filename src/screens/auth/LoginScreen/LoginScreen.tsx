import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen({navigation}) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        errorMessage="Mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text mt="s10" color="primary" bold preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button title="Entrar" mt="s48" />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  );
}
