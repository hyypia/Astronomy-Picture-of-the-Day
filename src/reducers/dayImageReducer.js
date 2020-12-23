import * as actions from '../actions/dayImageActions';

const initialState = {
  dayImage: [],
  loading: false,
  hasError: false,
};

const { GET_IMAGE, GET_IMAGE_SUCCESS, GET_IMAGE_FAILURE } = actions;

const dayImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_IMAGE_SUCCESS:
      return {
        dayImage: action.payload,
        loading: false,
        hasError: false,
      };
    case GET_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default dayImageReducer;
