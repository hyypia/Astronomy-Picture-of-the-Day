export const GET_MEDIA = 'GET_MEDIA';
export const GET_MEDIA_SUCCESS = 'GET_MEDIA_SUCCESS';
export const GET_MEDIA_FAILURE = 'GET_MEDIA_FAILURE';

export const getMedia = () => ({
  type: GET_MEDIA,
});

export const getMediaSuccess = (media) => ({
  type: GET_MEDIA_SUCCESS,
  payload: media,
});

export const getMediaFailure = () => ({
  type: GET_MEDIA_FAILURE,
});

export function fetchMedia() {
  return async (dispatch) => {
    dispatch(getMedia());

    try {
      const res = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=fXQ5MaFBHMZP7oiG4usDKm9ZgcR1Brl06LmAOyts&count=5'
      );
      const data = await res.json();

      dispatch(getMediaSuccess(data));
    } catch (err) {
      dispatch(getMediaFailure());
    }
  };
}
