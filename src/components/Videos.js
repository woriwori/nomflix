import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { moviesApi, tvApi } from 'api';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Videos = ({ isMovie, id }) => {
  const [videos, setVideos] = useState([]);
  const ytOptions = {
    height: '270',
    width: '480'
  };

  const getVideos = useCallback(async () => {
    try {
      const { data } = isMovie ? await moviesApi.movieVideos(id) : await tvApi.tvVideos(id);
      setVideos(data.results);
    } catch {
    } finally {
    }
  }, [isMovie, id]);

  useEffect(() => {
    getVideos();
  }, [isMovie, id]);

  return (
    <Container>{videos.length && videos.map((video) => <YouTube videoId={video.key} opts={ytOptions} />)}</Container>
  );
};

export default Videos;
