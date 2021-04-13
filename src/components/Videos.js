import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { moviesApi, tvApi } from 'api';
import Loader from 'components/Loader';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const YTContainer = styled.div`
  margin-bottom: 10px;
`;

const Videos = ({ isMovie, id }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ytOptions = {
    height: '270',
    width: '480'
  };

  const getVideos = useCallback(async () => {
    try {
      const { data } = isMovie ? await moviesApi.movieVideos(id) : await tvApi.tvVideos(id);
      setVideos(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [isMovie, id]);

  useEffect(() => {
    getVideos();
  }, [isMovie, id]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {videos.length &&
        videos.map((video) => (
          <YTContainer>
            <YouTube videoId={video.key} opts={ytOptions} />
          </YTContainer>
        ))}
    </Container>
  );
};

export default Videos;
