// import { store } from '@redux';
import I18n from 'react-native-i18n';
import { en } from './en';
import { ja } from './jp';

I18n.fallbacks = true;
I18n.defaultLocale = 'jp';

I18n.translations = {
  en,
  ja,
};

const trans = (string: string, params?: any) => {
  // let language = store.getState().authReducers.locale;
  // I18n.locale = language;
  return I18n.t(string, params);
};

export default { ...I18n, trans };
