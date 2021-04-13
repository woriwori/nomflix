import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Profile = styled.img`
  width: 200px;
  height: 300px;
`;
const Name = styled.div`
  width: calc(100% - 200px);
  font-size: 25px;
  margin-left: 10px;
`;

const CreatedBy = ({ createdBy }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      {createdBy.length &&
        createdBy.map(({ name, profile_path }) => (
          <Container>
            <Profile src={`${imgUrl}${profile_path}`} />
            <Name>{name}</Name>
          </Container>
        ))}
    </>
  );
};

export default CreatedBy;
