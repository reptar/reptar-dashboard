import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Config from './Config';
import Post from './Post';

const Container = styled.div`
  border: 1px solid blue;
  flex: 1;
  overflow: auto;
`;

export default class MainContent extends Component {
  render() {
    return (
      <Container>
        <Route path="/config" component={Config} />
        <Route path="/post/:id" component={Post} />
      </Container>
    );
  }
}
