import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { moviesApi, tvApi } from 'api';
import Loader from 'components/Loader';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SeasonContainer = styled.div`
  padding-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    border-bottom: 0px;
  }
  display: flex;
`;
const Poster = styled.img`
  width: 200px;
  height: 300px;
`;
const Info = styled.div`
  width: calc(100% - 210px);
  padding-left: 10px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  line-height: 50px;
`;
const Date = styled.div`
  font-size: 15px;
`;
const Overview = styled.div`
  width: 100%;
  height: auto;
  white-space: pre-line;
`;

const Reviews = ({ seasons }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <Container>
      {seasons.length
        ? seasons.map((season) => (
            <SeasonContainer>
              <Poster src={`${imgUrl}${season.poster_path}`} alt={season.name} />
              <Info>
                <TitleContainer>
                  <Title>{season.name}</Title>
                  <Date>{season.air_date}</Date>
                </TitleContainer>
                <Overview>{season.overview}</Overview>
              </Info>
            </SeasonContainer>
          ))
        : 'Nothing Found.'}
    </Container>
  );
};

export default Reviews;
