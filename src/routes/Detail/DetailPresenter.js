import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'components/Loader';
import Message from 'components/Message';
import Tabs from 'components/Tabs';
import Videos from 'components/Videos';
import Reviews from 'components/Reviews';
import Company from 'components/Company';
import CreatedBy from 'components/CreatedBy';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.2;
  z-index: 0;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  width: 30%;
  height: 100%;
`;
const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;
const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  width: 50%;
`;
const ImdbLink = styled.a`
  background-color: #f5c518;
  padding: 2px 4px;
  border-radius: 6px;
  color: #121212;
`;
const SLink = styled(Link)`
  text-decoration: underline;
  margin-top: 7px;
  display: block;
  color: rgb(27 162 204);
`;

const DetailPresenter = ({ result, error, loading, isMovie }) => {
  // const tabItems = [
  //   { title: 'Videos', path: '/video', component: Videos, props: { isMovie: true, id: result.id } },
  //   { title: 'Reviews', path: '/reviews', component: Videos, props: { isMovie: true, id: result.id } }
  // ];

  const getTabItems = useCallback((isMovie, result) => {
    if (isMovie) {
      return [
        { title: 'Videos', component: Videos, props: { isMovie, id: result.id } },
        { title: 'Reviews', component: Reviews, props: { isMovie, id: result.id } },
        { title: 'Company', component: Company, props: { companies: result.production_companies } }
      ];
    } else {
      return [
        { title: 'Seasons', component: Company, props: { companies: result.seasons } },
        { title: 'Created By', component: CreatedBy, props: { createdBy: result.created_by } },
        { title: 'Company', component: Company, props: { companies: result.production_companies } }
      ];
    }
  });

  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#e74c3c" text={error} />
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} | Nomflix</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`} />
        <Data>
          <div style={{ height: '50%' }}>
            <Title>{result.original_title ? result.original_title : result.original_name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>·</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                  )}
              </Item>
              <Divider>·</Divider>
              <Item>{result.runtime ? result.runtime : result.episode_run_time[0]}</Item>
              <Divider>·</Divider>
              <Item>
                <ImdbLink href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
                  IMDB
                </ImdbLink>
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <SLink to={`/collection/${result.id}`}> See Other Collection..</SLink>
          </div>
          <div style={{ height: '50%', marginLeft: '10px' }}>
            <Tabs items={getTabItems(isMovie, result)} />
          </div>
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
