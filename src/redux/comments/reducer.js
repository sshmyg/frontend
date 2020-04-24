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

export default function commentsReducer(state = defaultState) {
  return state;
}
