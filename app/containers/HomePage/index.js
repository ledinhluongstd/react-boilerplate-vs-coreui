import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import { Input, Button } from 'reactstrap';
// import { Link } from 'react-router';
// import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { ROUTER } from '../../utils/constants';
import { handleRedirectTo } from '../../utils/commonFunction';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const {
      // loading, error, repos,
      username,
    } = this.props;
    return (
      <div>
        <Input
          id="username"
          type="text"
          placeholder="mxstbr"
          value={username}
          onChange={this.props.onChangeUsername}
        />
        <Button
          onClick={() => handleRedirectTo(this, ROUTER.LOGIN)}
          color="primary"
          className="px-4"
        >
          Login
        </Button>
        <Button
          onClick={this.props.onSubmitForm}
          color="primary"
          className="px-4"
        >
          Submit
        </Button>
      </div>
    );
  }
}

HomePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => {
      dispatch(changeUsername(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
