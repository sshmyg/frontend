import { shallowEqual, useSelector as useSelectorRR } from 'react-redux';

export const useSelector = (selector) => useSelectorRR(selector, shallowEqual);
