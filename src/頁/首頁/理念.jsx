import React, { Component, PropTypes } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

class 理念 extends Component {
  render() {
    return (
      <Segment basic className="stripe slogan">
        <Container text>
        <Header as='h2' textAlign='center'>用程式推廣台灣母語！</Header>
        <p>開發台語/閩南語、客語、族語等開源工具，讓學習母語以及研究母語的人可以事半功倍！</p>
        <p>市面上很多華語工具，不一定適用全部的語言。我們希望為母語使用者提供另一種選擇。</p>
        </Container>
      </Segment>
    );
  }
}

export default 理念;
