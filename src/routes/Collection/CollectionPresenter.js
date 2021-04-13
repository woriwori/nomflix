import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'components/Section';
import Loader from 'components/Loader';
import Message from 'components/Message';
import Poster from 'components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ parts, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Movies | Collection</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {parts && parts.length > 0 && (
            <Section title="Collection">
              {parts.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.split('-')[0]}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
