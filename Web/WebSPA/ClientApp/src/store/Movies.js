const requestMoviesType = 'REQUEST_MOVIES';
const receiveMoviesType = 'RECEIVE_MOVIES';
const initialState = { movies: [], isLoading: false };

export const actionCreators = {
  requestMovies: startDateIndex => async (dispatch, getState) => {    
    // if (startDateIndex === getState().movies.startDateIndex) {
    //   // Don't issue a duplicate request (we already have or are loading the requested data)
    //   return;
    // }

    dispatch({ type: receiveMoviesType});

    const url = `https://dxmoviesapi.azurewebsites.net/api/v1/movies`;
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies);

    dispatch({ type: receiveMoviesType, payload: movies });
  }
};

export const reducer = (state=initialState, action) => {
  //state = state || initialState;
  console.log(action);

  if (action.type === requestMoviesType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveMoviesType) {
    return {
      ...state,
      movies: action.payload,
      isLoading: false
    };
  }

  return state;
};
