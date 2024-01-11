import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEnter, setIsSecurityTextEnter] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecurityTextEnter(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecurityTextEnter}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecurityTextEnter ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
