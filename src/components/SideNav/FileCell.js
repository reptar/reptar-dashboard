import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

const Container = styled(NavLink).attrs({
  activeClassName,
})`
  display: block;
  border-width: 1px;
  border-style: solid;
  border-color: blue;
  padding: 10px;

  &, &:visited {
    color: black;
  }

  &.${activeClassName} {
    border-color: blue;
    color: blue;
  }
`;

export default ({ id, displayId }) =>
  <Container to={`/post/${id}`}>
    {displayId}
  </Container>;
