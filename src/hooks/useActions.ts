import { bindActionCreators, ActionCreatorsMapObject } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const useActions = (
  actions: ActionCreatorsMapObject,
  deps = [],
): ActionCreatorsMapObject => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : deps,
  );
};
