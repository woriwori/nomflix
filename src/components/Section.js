import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const Grid = styled.div`
  margin-bottom: 20px;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Section;
