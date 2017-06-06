import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink as NavLinkReactRouter } from 'react-router-dom';
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
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Content = styled.div`
  overflow: auto;
`;

const NavLinkContainer = styled.ul`
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
`;

const activeClassName = 'active';
const NavLink = styled(NavLinkReactRouter).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: black;

  &.${activeClassName} {
    border-color: blue;
    color: blue;
  }
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
          <Title>Reptar</Title>
          <NavLinkContainer>
            <NavLink to="/config">Config</NavLink>
          </NavLinkContainer>
        </Header>

        <Content>
          {files.map(file =>
            <FileCell
              key={file.id}
              {...file}
              active={ui.selectedId === file.id}
            />
          )}
        </Content>
      </Container>
    );
  }
}
