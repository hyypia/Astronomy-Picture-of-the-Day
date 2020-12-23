const GET_IMAGE = 'GET_IMAGE';
const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE';

export const getImage = () => ({
  type: GET_IMAGE,
});

export const getImageSuccess = (image) => ({
  type: GET_IMAGE_SUCCESS,
  payload: image,
});

export const getImageFailure = () => ({
  type: GET_IMAGE_FAILURE,
});

export const fetchImage = (apiService) => () => (dispatch) => {
  dispatch(getImage());
  apiService
    .getDayImage()
    .then((image) => dispatch(getImageSuccess(image)))
    .catch((err) => dispatch(getImageFailure()));
  // return async (dispatch) => {
  //   dispatch(getImage());
  //   try {
  //     const res = await fetch(
  //       'https://api.nasa.gov/planetary/apod?api_key=fXQ5MaFBHMZP7oiG4usDKm9ZgcR1Brl06LmAOyts'
  //     );
  //     const data = await res.json();
  //     dispatch(getImageSuccess(data));
  //   } catch (err) {
  //     dispatch(getImageFailure());
  //   }
  // };
};
