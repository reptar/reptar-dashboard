import { inject } from 'mobx-react';
import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav from './components/SideNav/SideNav';
import MainContent from './components/MainContent';

const Container = styled.div`
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

@inject('reptar')
class App extends Component {
  componentDidMount() {
    this.props.reptar.sync();
  }

  render() {
    return (
      <Container>
        <SideNav />
        <MainContent />
      </Container>
    );
  }
}

export default App;
