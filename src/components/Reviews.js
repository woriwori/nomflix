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
const ReviewContainer = styled.div`
  padding-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    border-bottom: 0px;
  }
`;
const UserContainer = styled.div`
  display: flex;
  height: 50px;
`;
const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
const UserInfo = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  padding-left: 10px;
`;
const UserName = styled.div`
  height: 30px;
  font-size: 13px;
  font-weight: bold;
  line-height: 30px;
`;
const UserCreated = styled.div`
  height: 20px;
  vertical-align: bottom;
  display: inline;
  line-height: 20px;
  font-size: 10px;
  opacity: 0.7;
`;
const Rating = styled.div`
  width: 100px;
  font-size: 18px;
  line-height: 50px;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
  white-space: pre-line;
  padding-top: 7px;
`;

const Reviews = ({ isMovie, id }) => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const avatarUrl = 'https://image.tmdb.org/t/p/w50_and_h50_face';

  const getReviews = useCallback(async () => {
    try {
      const { data } = isMovie ? await moviesApi.movieReviews(id, page) : await tvApi.tvReviews(id, page);
      setReviews(data.results);
      console.log(reviews);
    } catch {
    } finally {
    }
  }, [isMovie, id, page]);

  const getFormattedDate = useCallback((datetime) => {
    const date = new Date(datetime);

    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  });

  useEffect(() => {
    getReviews();
  }, [isMovie, id, getReviews]);

  return (
    <Container>
      {reviews.length &&
        reviews.map((review) => (
          <ReviewContainer>
            <UserContainer>
              <UserAvatar src={`${avatarUrl}${review.author_details.avatar_path}`} alt={review.author_details.name} />
              <UserInfo>
                <UserName>{review.author}</UserName>
                <UserCreated>{getFormattedDate(review.created_at)}</UserCreated>
              </UserInfo>
              <Rating>🌟 {review.author_details.rating} / 10</Rating>
            </UserContainer>
            <Content>{review.content}</Content>
          </ReviewContainer>
        ))}
    </Container>
  );
};

export default Reviews;
