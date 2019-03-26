import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import {
  makeToken,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import { userLogin } from '../App/actions';
import { changeUsername, changePassword } from './actions';
import { makeSelectUsername, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';
import { handleRedirectTo } from '../../utils/commonFunction';
import { ROUTER } from '../../utils/constants';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  changeElement(event) {
    this.state.user[event.target.id] = event.target.value;
    this.forceUpdate();
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.onSubmitForm();
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.handleLogin(event);
    }
  }

  handleShowHidePass() {
    this.state.showPassword = !this.state.showPassword;
    this.forceUpdate();
  }

  render() {
    const { showPassword } = this.state;
    const {
      // token,
      // error,
      // loading,
      username,
      password,
    } = this.props;
    const typePassword = showPassword ? 'text' : 'password';
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={() => this.handleLogin()}>
                      <h1>
                        <FormattedMessage {...messages.Login} />
                      </h1>
                      <p className="text-muted">
                        <FormattedMessage
                          {...messages.sign_in_to_your_account}
                        />
                      </p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          // onChange={event => this.changeElement(event)}
                          onChange={this.props.onChangeUsername}
                          onKeyDown={event => this.handleKeyDown(event)}
                          value={username}
                          id="username"
                          placeholder={messages.username.defaultMessage}
                          autoComplete="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type={typePassword}
                          // onChange={event => this.changeElement(event)}
                          onChange={this.props.onChangePassword}
                          onKeyDown={event => this.handleKeyDown(event)}
                          value={password}
                          id="password"
                          placeholder={messages.password.defaultMessage}
                          autoComplete="current-password"
                        />
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText
                            onClick={() => this.handleShowHidePass()}
                          >
                            <i className="icon-eye" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            onClick={event => this.handleLogin(event)}
                            color="primary"
                            className="px-4"
                          >
                            <FormattedMessage {...messages.Login} />
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button
                            onClick={() =>
                              handleRedirectTo(this, ROUTER.FORGOT_PASSWORD)
                            }
                            color="link"
                            className="px-0"
                          >
                            <FormattedMessage {...messages.forgot_password} />
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  token: PropTypes.object,
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => {
      dispatch(changeUsername(evt.target.value));
    },
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(userLogin());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  token: makeToken(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
