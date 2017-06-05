import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

export default ({ onClick, id }) =>
  <Container onClick={() => onClick(id)}>
    {id}
  </Container>;
