import c from './constants';

export function setLang(lang) {
  return {
    type: c.SET_LANG,
    payload: { lang }
  };
}
