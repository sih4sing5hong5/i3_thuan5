import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

export default class 大看板 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment textAlign='center' inverted vertical>
        <Container text>
        <Header as='h1' inverted>ÌTHUÂN KHOKI</Header>
        <Header as='h6' inverted>用科技 sak 台灣母語</Header>
        <br></br>
        </Container>
      </Segment>
    );
  }
}
