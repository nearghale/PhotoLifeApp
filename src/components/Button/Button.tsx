import React from 'react';

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import {buttonPresets} from './buttonPresets';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export type ButtonPreset = 'primary' | 'outline' | 'ghost';

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator
          testID="activity-indicator"
          color={buttonPreset.content.color}
        />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.content.color}
          {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
