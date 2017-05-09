import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid blue;
  flex: 1;
  overflow: auto;
`;

@inject('reptar', 'ui')
@observer
export default class MainContent extends Component {
  render() {
    const { ui } = this.props;
    return (
      <Container>
        <h1>Content!</h1>
        {ui.selected &&
          <div>
            <bold>{ui.selected.path}</bold>
            <div
              dangerouslySetInnerHTML={{
                __html: ui.selected.data.content,
              }}
            />
          </div>}
      </Container>
    );
  }
}
