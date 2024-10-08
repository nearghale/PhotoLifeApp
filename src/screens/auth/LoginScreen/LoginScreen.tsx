import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();

  const {signIn, isLoading} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'mariajulia@coffstack.com',
      password: 'supersecret',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    signIn({email, password});
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        control={control}
        name="password"
        boxProps={{mb: 's20'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        mt="s10"
        color="primary"
        bold
        preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        title="Entrar"
        loading={isLoading}
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  );
}
