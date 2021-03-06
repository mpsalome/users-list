import { ADD_USER, LOAD_USERS, EDIT_USER, REMOVE_USER } from '../actions/users';

const initialState = {
  users: [],
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      let newId = 1;
      if (state.users.length !== 0)
        newId = state.users[state.users.length - 1].id + 1;

      return {
        ...state,
        users: state.users.concat({ id: newId, ...action.payload }),
      };
    case LOAD_USERS:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...action.payload } : user
        ),
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((USER) => USER.id !== action.payload),
      };
    default:
      return state;
  }
};
