import {
  GET_MEDIA,
  GET_MEDIA_SUCCESS,
  GET_MEDIA_FAILURE,
} from '../actions/mediaActions';

const initialState = {
  media: [],
  loading: false,
  hasError: false,
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIA:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_MEDIA_SUCCESS:
      return {
        dayImage: action.payload,
        loading: false,
        hasError: false,
      };
    case GET_MEDIA_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default mediaReducer;
