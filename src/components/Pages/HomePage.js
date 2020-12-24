import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchImage } from '../../actions/dayImageActions';
import DayImage from '../DayImage';
import ItemCard from '../ItemCard';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const HomePage = ({ dispatch, dayImage, loading, hasError }) => {
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);

  const renderDayImage = () => {
    if (loading) return <Spinner />;
    if (hasError) return <ErrorIndicator />;
    return <DayImage dayImage={dayImage} />;
  };

  return (
    <>
      <section>{renderDayImage()}</section>
      <section>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  dayImage: state.dayImage,
  hasError: state.hasError,
});

export default connect(mapStateToProps)(HomePage);
