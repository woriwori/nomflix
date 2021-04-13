import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ItemContainer = styled.div`
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
const Profile = styled.img`
  width: 200px;
  height: 300px;
`;
const NameContainer = styled.div`
  width: calc(100% - 210px);
  padding-left: 10px;
`;
const Name = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  line-height: 50px;
`;

const CreatedBy = ({ createdBy }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <Container>
      {createdBy.length &&
        createdBy.map(({ name, profile_path }) => (
          <ItemContainer>
            <Profile src={`${imgUrl}${profile_path}`} />
            <NameContainer>
              <Name>{name}</Name>
            </NameContainer>
          </ItemContainer>
        ))}
    </Container>
  );
};

export default CreatedBy;
