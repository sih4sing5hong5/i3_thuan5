import React, { Component, PropTypes } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

class 贊助 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment vertical className="stripe">
        <Container text>
        <Header as='h2' textAlign='center'>聯絡我們</Header>
        <p>這些工具都是開放原始碼，歡迎大家使用 :)<br/>
        如果需要客製化或有任何的建議，歡迎<a href='https://www.facebook.com/i3thuan5/'>和我們聯絡<Icon name='facebook' /></a>。</p>
        </Container>
      </Segment>
    );
  }
}

export default 贊助;
