import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header``;
const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;
const Item = styled.li``;
const SLink = styled(Link)``;

class Header extends Component {
  render() {
    return (
      <SHeader>
        <List>
          <Item>
            <SLink href="/">Movies</SLink>
          </Item>
          <Item>
            <SLink href="/tv">TV</SLink>
          </Item>
          <Item>
            <SLink href="/search">Search</SLink>
          </Item>
        </List>
      </SHeader>
    );
  }
}

export default Header;
