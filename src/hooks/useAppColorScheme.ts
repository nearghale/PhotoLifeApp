import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSettingsService} from '@services';

/*
 * To listen to device color scheme change(dark mode and light mode)
 */
export function useAppColorScheme() {
  const {onSystemChange} = useSettingsService();

  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(preference => {
      onSystemChange(preference.colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, [onSystemChange]);
}
