import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DayImage from '../DayImage';
import withApiService from '../hoc';
import compose from '../../utils';
import { fetchImage } from '../../actions/dayImageActions';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const HomePage = ({ dispatch, dayImage, loading, hasError }) => {
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);

  console.log(dayImage);

  const renderDayImage = () => {
    if (loading) return <Spinner />;
    if (hasError) return <ErrorIndicator />;
    return <DayImage dayImage={dayImage} />;
  };

  return <section>{renderDayImage()}</section>;
};

const mapStateToProps = (state) => ({
  loading: state.dayImage.loading,
  dayImage: state.dayImage.dayImage,
  hasError: state.dayImage.hasError,
});

export default compose(withApiService(), connect(mapStateToProps))(HomePage);
