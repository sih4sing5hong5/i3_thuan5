import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Segment, Menu, Icon, Header } from 'semantic-ui-react';
import Debug from 'debug';
var debug = Debug('ithuan:頁首');

class 頁首 extends Component {
  constructor(props) {
    super(props);
    this.getItemClass = this.getItemClass.bind(this);
  }

  getItemClass(value) {
    return this.props.getClasses(value);
  }

  render() {
    const { paths, handleItemClick } = this.props;

    return (
      <Segment id="appNav" textAlign='center' inverted vertical>
        <Container>
          <Menu secondary inverted size="large" pointing>
            <Link to={paths.home} className={this.getItemClass(paths.home)} onClick={handleItemClick.bind(this, paths.home)}>首頁</Link>
            <Link to={paths.tsooji} className={this.getItemClass(paths.tsooji)} onClick={handleItemClick.bind(this, paths.tsooji)}>線上組字</Link>
            <Link to={paths.kosu} className={this.getItemClass(paths.kosu)} onClick={handleItemClick.bind(this, paths.kosu)}>閩客故事</Link>
            <Link to={paths.siongkuan} className={this.getItemClass(paths.siongkuan)} onClick={handleItemClick.bind(this, paths.siongkuan)}>相關連結</Link>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default 頁首;
