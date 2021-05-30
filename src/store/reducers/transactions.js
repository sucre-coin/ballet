import { type as findSuggestionsType } from '../actions/findTransaction';

const data = [
  {
    type: 'receive',
    time: 1622335598806,
    amount: '0.03940246',
    from: '123123123',
    to: '123123123',
    hash: '123123123',
    status: true,
    state: ''
  },
  {
    type: 'sent',
    time: 1622335598806,
    amount: '0.03940246',
    from: '123123123',
    to: '123123123',
    hash: '123123123',
    status: true,
    state: ''
  }
];

const reducer = (state = data, { type, payload }) => {
  switch (type) {
    case findSuggestionsType: {
        if (!payload) {
          return [];
        }
        const regex = new RegExp(`^${payload}` , 'i');
        return state.filter(n => regex.test(n.title));
      }
    default:
      return state;
  }
}

export default reducer;
