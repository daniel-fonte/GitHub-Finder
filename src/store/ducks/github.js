import api from '../../Services/githubApi';

// Actions
const LOAD = 'LOAD_FETCH';
const SUCCESS = 'SUCCESS_FETCH';
const ERROR = 'ERROR_FETCH';

// Reducer
const initialState = {
  Load: false,
  User: null,
  Repositories: null,
  Error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        Load: true,
      };
    case SUCCESS:
      return {
        ...state,
        Load: false,
        User: action.payload.User,
        Repositories: action.payload.Repositories,
      };
    case ERROR:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

// Actions Creators
export function startFetch() {
  return {
    type: LOAD,
  };
}

export function successFetch(user, repos) {
  return {
    type: SUCCESS,
    payload: {
      User: user,
      Repositories: repos,
    },
  };
}

export function errorFetch() {
  return {
    type: ERROR,
  };
}

// Middlewares
export const fetchUser = (username) => async (dispatch) => {
  try {
    dispatch(startFetch());
    const user = await api.get(`/users/${username}`).data;
    const repos = await api.get(`/users/${username}/repos`).data;

    return dispatch(successFetch(user, repos));
  } catch (error) {
    return dispatch(errorFetch());
  }
};
