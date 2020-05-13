import { ActionCreator, Action } from 'redux';

import c from './constants';

export interface SetLangAction extends Action {
  type: typeof c.SET_LANG;
  payload: {
    lang: string;
  };
}

export type SetLangActionCreator = ActionCreator<SetLangAction>;

export const setLang: SetLangActionCreator = (lang: string) => ({
  type: c.SET_LANG,
  payload: { lang },
});
