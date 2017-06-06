import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div`
`;

@inject('reptar')
@observer
export default class Config extends Component {
  render() {
    const { reptar } = this.props;
    return (
      <Container>
        <h1>Config</h1>
        <pre>
          {JSON.stringify(reptar.config, 2, ' ')}
        </pre>
      </Container>
    );
  }
}
