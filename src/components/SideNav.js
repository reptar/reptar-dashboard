import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import FileCell from './FileCell';

const Container = styled.nav`
  flex-basis: 300px;
  flex-grow: 0;
  border: 1px solid black;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid black;
`;

const Content = styled.div`
  overflow: auto;
`;

@inject('reptar', 'ui')
@observer
export default class SideNav extends Component {
  render() {
    const { reptar, ui } = this.props;
    const { files } = reptar;
    return (
      <Container>
        <Header>
          <h2>SideNav</h2>
        </Header>

        <Content>
          {files.map(file => (
            <FileCell key={file.id} onClick={ui.setSelected} {...file} />
          ))}
        </Content>
      </Container>
    );
  }
}
