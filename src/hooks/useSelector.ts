import { shallowEqual, useSelector as useSelectorRR } from 'react-redux';

import { AppState } from '@/types';

export const useSelector = <T>(selector: (state: AppState) => T): T =>
  useSelectorRR(selector, shallowEqual);
