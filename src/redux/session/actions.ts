import c from './constants';

import { ActionCreator } from '@/types';

interface SetLangPayload {
  lang: string;
}

export interface SetLangAction {
  type: typeof c.SET_LANG;
  payload: SetLangPayload;
}

export type SetLangActionCreator = ActionCreator<
  SetLangPayload['lang'],
  SetLangAction
>;

export const setLang: SetLangActionCreator = (lang: string) => ({
  type: c.SET_LANG,
  payload: { lang },
});
