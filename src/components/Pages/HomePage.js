import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchImage } from '../../actions/dayImageActions';
import { fetchMedia } from '../../actions/mediaActions';
import DayImage from '../DayImage';
import ItemCard from '../ItemCard';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const HomePage = ({ dispatch, dayImage, media, loading, hasError }) => {
  useEffect(() => {
    dispatch(fetchImage());
    dispatch(fetchMedia());
  }, [dispatch]);

  console.log(media);

  const renderDayImage = () => {
    if (loading) return <Spinner />;
    if (hasError) return <ErrorIndicator />;
    return <DayImage dayImage={dayImage} />;
  };

  const renderMediaItem = () => {
    if (loading) return <Spinner />;
    if (hasError) return <ErrorIndicator />;
    return (
      <ul className="book-list">
        <ItemCard media={media} />
        {/* {media.map((item) => {
          return (
            <li key={item.id}>
              <ItemCard media={item} />
            </li>
          );
        })} */}
      </ul>
    );
  };

  return (
    <>
      <section>{renderDayImage()}</section>
      <section>{renderMediaItem()}</section>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  dayImage: state.dayImage,
  hasError: state.hasError,
});

export default connect(mapStateToProps)(HomePage);
