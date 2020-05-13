import { Reducer } from 'redux';

import { AddCommentAction } from './actions';

const defaultState = [
  {
    name: 'Test name',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit deleniti fuga sunt at excepturi repudiandae ipsa debitis. Exercitationem harum dolore quidem, officia, veritatis debitis unde autem voluptatibus, sequi sint provident',
    date: Date.now(),
  },
  {
    name: 'Test name',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit deleniti fuga sunt at excepturi repudiandae ipsa debitis. Exercitationem harum dolore quidem, officia, veritatis debitis unde autem voluptatibus, sequi sint provident',
    date: Date.now(),
  },
];

const commentsReducer: Reducer<unknown, AddCommentAction> = (
  state = defaultState,
) => state;

export default commentsReducer;
