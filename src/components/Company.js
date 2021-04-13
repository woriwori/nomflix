import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 200px;
  height: 200px;
  background: white;
  margin-bottom: 10px;
`;

const Videos = ({ companies }) => {
  const logoUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <Container>
      {companies.length ? companies.map(({ logo_path }) => <Logo src={`${logoUrl}${logo_path}`} />) : 'Nothing Found.'}
    </Container>
  );
};

export default Videos;
