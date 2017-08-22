import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TableContainer from './TableContainer';

import * as dataActions from '../actions/data';

class App extends PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { props } = this;

    return (
      <div>
        <div>
          <TableContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  onLoad: () => dispatch(dataActions.requestData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
