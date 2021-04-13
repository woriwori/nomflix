import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;

const Videos = () => (
  <Container>
    <span role="img" aria-label="loading" />
    loading 중..
  </Container>
);

export default Videos;
