import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  margin-top: 20px;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="loading" />⏳
  </Container>
);

export default Loader;
